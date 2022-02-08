---
id: scheduler
title: OracleChain Scheduler
---

The OracleChain module contains a process in charge of scheduling the data fetching and transaction submitting.

It's modeled as finite state machine.

Three main state are represented:
- `IDLE`: When the process is waiting a new tick to be triggered based on some interval
- `Polling`: When the process must fetch data from external sources
- `Summary`: When the process must aggregate the entire polling transactions for a given interval

:::info
Mainnet and Testnet can have different values based on environment variables.

This is due to simulate quicker events and summary.

For example, 
- on Mainnet: each polling is triggered each minute and the summary each day at 00:00 UTC.
- on Testnet: each polling is triggered each 10s and the summary each minute.
:::

For each actionable state, the process determines if the current running node is in charge to fetch or emit the transaction, based on the election algorithm.

Also to avoid any useless transactions, the process identifies if a new transaction must be emitted regarding the freshness of the information retrieved from the Oracle services.

You can find below a schema representing this finite state machine and its related events.

:::note OracleChain Scheduler FSM

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Idle: "tick

    state "Is summary time ?" as Is_Summary_Time

    state if_state <<choice>>
    Idle --> Is_Summary_Time
    Is_Summary_Time --> if_state
    if_state --> Summary: "Yes"
    if_state --> Polling: "No"
    

    state Polling {
        state if_state_polling <<choice>>
        state "Is polling trigger node ?" as IsPollingTriggerNode
        state "Fetching data" as FetchData
        state if_state_polling_new_data <<choice>>
        state "Is new data ?" as IsNewData
        state "Send oracle transaction" as SendOracleTransaction

        [*] --> IsPollingTriggerNode
        IsPollingTriggerNode --> if_state_polling
        if_state_polling --> [*]: "No"
        if_state_polling --> FetchData: "Yes"
        FetchData --> IsNewData

        IsNewData --> if_state_polling_new_data
        if_state_polling_new_data --> [*]: "No"
        if_state_polling_new_data --> SendOracleTransaction: "Yes"
        SendOracleTransaction --> [*]
    }

    Polling --> Idle
    

    state Summary {
        state if_state_summary <<choice>>
        state "Is summary trigger node ?" as IsSummaryTriggerNode
        state "Send summary transaction" as SendSummaryTransaction

        [*] --> IsSummaryTriggerNode
        IsSummaryTriggerNode --> if_state_summary
        if_state_summary --> [*]: "No"
        if_state_summary --> SendSummaryTransaction: "Yes"
        SendSummaryTransaction --> [*]
    }

    Summary --> Idle
```

:::note

