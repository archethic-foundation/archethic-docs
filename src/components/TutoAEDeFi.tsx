'use client'

import React, { useState, createContext, useContext } from 'react';


type StepContextType = {
    currentStep: number;
    setCurrentStep: (step: number) => void;
    stepHistory: number[];
    setStepHistory: (history: number[]) => void;
    goBack: () => void;
};

const StepContext = createContext<StepContextType>({
    currentStep: 0,
    setCurrentStep: () => { },
    stepHistory: [],
    setStepHistory: () => { },
    goBack: () => { }
});

export default function TutoAEDeFi() {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [stepHistory, setStepHistory] = useState<number[]>([]);

    const handleSetCurrentStep = (step: number) => {
        setStepHistory(prevHistory => {
            if (prevHistory[prevHistory.length - 1] !== step) {
                return [...prevHistory, step];
            } else {
                return prevHistory;
            }
        });
        setCurrentStep(step);
    };

    const goBack = () => {
        setStepHistory(prevHistory => {
            if (prevHistory.length > 1) {
                const newHistory = prevHistory.slice(0, -1);
                const previousStep = newHistory[newHistory.length - 1];
                setCurrentStep(previousStep);
                return newHistory;
            } else {
                return prevHistory;
            }
        });
    };

    const value = {
        currentStep,
        setCurrentStep: handleSetCurrentStep,
        stepHistory,
        setStepHistory,
        goBack
    };


    return (
        <StepContext.Provider value={value}>
            <style>
                {`
                    ul {
                        padding-left: 20px;
                
                        li {
                            line-height: 1.3;
                
                            ul {
                                padding-left: 20px;
                                line-height: 1.3;
                            }
                        }
                    }
                    .button {
                        border-radius: 5px;
                        background-color: white; 
                        color: black; 
                        padding: 10px 20px;
                        border: 1px solid #ccc;
                        font-family: inherit; 
                        font-size: inherit;
                        cursor: pointer;
                        outline: none; 
                        transition: color 0.3s ease;
                    }
                    .button:hover {
                        color: #757575; 
                    }
                }
                `}
            </style>
            <div>
                <StepSwitcher />
            </div>
        </StepContext.Provider>
    );
}

function StepSwitcher() {
    const context = useContext(StepContext);
    const { currentStep } = context;

    switch (currentStep) {
        case 1:
            return <StepOne />;
        case 2:
            return <StepTwo />;
        case 3:
            return <StepThree />;
        case 4:
            return <StepFour />;
        case 5:
            return <StepFive />;
        case 6:
            return <StepSix />;
        case 0:
            return <WelcomeStep />;
    }
}

function WelcomeStep() {
    const { setCurrentStep } = useContext(StepContext);
    return (
        <div>
            <h2>Welcome to the interactive guide for using the Archethic Bridge</h2>
            <h3>This tutorial will explain the following points:</h3>
            <ul>
                <li>Retrieve and create an Archethic Wallet</li>
                <li>Withdraw your UCO ERC20 from a Centralized Exchange (CEx)</li>
                <li>Transfer your UCO ERC20 to Archethic</li>
                <li>Transfer your ETH to Polygon PoS</li>
                <li>Transfer your WETH to Archethic</li>
            </ul>
            <button className="button" onClick={() => setCurrentStep(1)}>Start the tutorial</button><br />
            <br />
        </div>
    );
}

function StepOne() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Creating an Archethic Wallet</h2>
            <h3>Would you like to know how to create your Archethic Wallet?</h3>
            <button className="button" onClick={() => setCurrentStep(2)}>Yes, I want to know the procedure</button><br /><br />
            <button className="button" onClick={() => setCurrentStep(3)}>No, I want to go directly to the step for withdrawing my UCO ERC20 from a Centralized Exchange</button><br /><br />
            <button className="button" onClick={goBack}>Back</button><br /><br />
            <br />
        </div>
    );
}


function StepTwo() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Creating an Archethic Wallet</h2>
            <h3>How to create a wallet on the Archethic blockchain?</h3>
            <ul>
                <li>First, download the wallet application here depending on whether you are on Mac, Linux, or PC <u><a href="https://www.archethic.net/wallet" target="_blank" rel="noopener noreferrer">here</a></u>.</li>
                <li>Once installed, you can launch the application.</li>
                <ul>
                    <li>The first page invites you to read and accept the privacy policy</li>
                    <li>Once accepted, you can click on "Get started" to begin creating your wallet.<br />
                        IMPORTANT: In the window that appears, make sure to check at the top right that Archethic Main Network
                        is selected!</li>
                </ul>
                <li>Start by naming your first account within your future decentralized keychain.</li>
                <li>A confirmation window appears to verify that the account name suits you.</li>
                <li>The application reminds you of important security information to protect your funds and your
                    secret phrase.</li>
                <li>After reading the information, click on "I understand."</li>

                <li>The 24 words of your secret phrase will be displayed.<br />
                    <b>At this stage, you can choose a list of 24 words in French or English (remember this choice!).<br />
                        This list of 24 words is confidential: do not communicate it to anyone and note it carefully to be able to confirm them in the next screen.<br />
                        Keep this list safe for future use.</b></li>
                <li>Confirmation requires putting the words in order.</li>
                <li>Once the process of confirming the order of the words of the secret phrase is done, you can select the means to protect your application (PIN code, password, biometrics, YubiKey).</li>
                <li>After a few seconds of waiting, your Archethic Wallet is created with your first account.</li>
                <li>Note that the Archethic Wallet will be necessary for the step "Transferring your UCO to Archethic."</li>
            </ul>
            <h3>Would you like to know how to withdraw your UCO from a centralized exchange?</h3>
            <button className="button" onClick={() => setCurrentStep(3)}>Yes, I want to know the procedure</button><br /><br />
            <button className="button" onClick={() => setCurrentStep(4)}>No, I want to go to the next step of transferring my UCO ERC20 to Archethic</button><br /><br />
            <button className="button" onClick={goBack}>Back</button><br /><br />
        </div >
    );
}

function StepThree() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Withdrawing Your UCO ERC20 from a Centralized Exchange (CEx)</h2>
            <h3>This step only concerns you if your UCO are on a Centralized Exchange (Probit or Zebitex)</h3>
            <ul>
                <li><b>Prerequisite:</b> the withdrawal requires having an EVM-compatible self-hosted Wallet (e.g., Metamask, Rabby…)</li>
                <ul>
                    <li>If you do not already have an existing wallet, we strongly recommend Rabby for its high security and ease of use. You can download it here: <u><a href="https://rabby.io/" target="_blank" rel="noopener noreferrer">https://rabby.io/</a></u></li>
                    <li>Follow the directions during setup.</li>
                </ul>
                <li>Once the self-hosted EVM Wallet is created, withdrawal procedures depend on the CEx used:</li>
                <ul>
                    <li>Probit: Follow the instructions <u><a href="https://www.probit.com/en-us/hc/6701622935833#h.r9p7ohh44ezw" target="_blank" rel="noopener noreferrer">here</a></u></li>
                    <li>Zebitex: Follow the instructions <u><a href="https://support.zebitex.com/hc/fr/articles/360017288659-Comment-faire-un-retrait" target="_blank" rel="noopener noreferrer">here</a></u></li>
                </ul>
                <li><b>Note:</b> In both cases, the address of your self-hosted EVM Wallet will be requested as the withdrawal destination.</li>
                <li>It is likely that your withdrawn UCO will be sent to the Ethereum blockchain.</li>
                <li>Once the withdrawal is completed, your UCO are in your self-hosted wallet and you can proceed to the next step.</li>
            </ul>
            <h3>Would you like to know how to transfer your UCO ERC20 to Archethic?</h3>
            <button className="button" onClick={() => setCurrentStep(4)}>Yes, I want to know the procedure</button><br /><br />
            <button className="button" onClick={() => setCurrentStep(5)}>No, I want to go to the step of transferring my ETH to Polygon PoS</button><br /><br />
            <button className="button" onClick={goBack}>Back</button><br /><br />
        </div>
    );
}

function StepFour() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Transferring Your UCO ERC20 to Archethic</h2><br />
            <ul>
                <li><b>Prerequisite:</b> This step only concerns you if your UCO are already on your self-hosted EVM Wallet (e.g., Metamask, Rabby…) and regardless of the EVM blockchain where your UCO are located, the process remains the same.</li>
                <li>Moreover, the bridge of UCO will require paying fees on the origin blockchain.<br />
                    <b>Ensure you have sufficient ETH on Ethereum, MATIC on Polygon, or BNB on the BNB Chain.</b></li>
                <li>The following operation consists of sending your UCO from the EVM blockchain to Archethic.</li>
                <li>For your information, this operation will transform your ERC-20 Tokens into native UCO Coins (a Coin is the local currency of a blockchain, and UCO becomes the local currency once on Archethic).</li>
                <li>Launch your Archethic Wallet (or create one by following the step <u><a onClick={() => setCurrentStep(2)} style={{ cursor: 'pointer' }}>Creating an Archethic Wallet</a></u>)</li>
                <li>Make sure your self-hosted EVM Wallet is on the address and blockchain that hold your UCO to be transferred</li>
                <li>Access the Archethic Bridge: <u><a href="https://bridge.archethic.net/" target="_blank" rel="noopener noreferrer">https://bridge.archethic.net/</a></u></li>
                <ul>
                    <li>Select the EVM Blockchain where your UCO are located (Ethereum, Polygon, or the BNB Chain)</li>
                    <li>Select Archethic as the destination.</li>
                    <li>Once the starting and destination blockchains are selected, choose UCO as the token/coin to send/receive</li>
                    <li>Based on your available UCO, enter the amount to transfer</li>
                    <li>Click on "Bridge" to start the transfer</li>
                    <li><b>Note: Do not hesitate to make a first trial with a small amount.</b></li>
                </ul>
                <img src="/img/tutorial/Tuto-DeFi-2.png" />
                <li>Once the transfer is initiated, follow the guidelines: The bridge will require several steps, several minutes, and multiple authorizations (signatures) to be completed sequentially in your self-hosted EVM Wallet and in your Archethic Wallet.</li>
                <li>Once the bridge is completed, you will receive a success message.</li>
                <li>If the amount of UCO does not immediately appear in your Archethic Wallet, do not hesitate to click on the "Refresh" button</li>
            </ul>
            <p>You can find additional information on the Bridge in the "Participate" section of this wiki: <u><a href="/participate/bridge/" target="_blank">"Participate"</a></u></p>
            <h3>Would you like to know how to transfer your ETH to Polygon PoS?</h3>
            <button className="button" onClick={() => setCurrentStep(5)}>Yes, I want to know the procedure</button><br /><br />
            <button className="button" onClick={() => setCurrentStep(6)}>No, I want to go to the step of transferring my WETH to Archethic</button><br /><br />
            <button className="button" onClick={goBack}>Back</button><br /><br />
        </div>
    );
}

function StepFive() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Transferring Your ETH to Polygon PoS</h2><br />
            <ul>
                <li><b>IMPORTANT:</b> ETH bridging to Archethic is only possible from the Polygon PoS Blockchain.
                    Therefore, you must first transfer your ETH to Polygon PoS before bridging them to Archethic.</li>
                <li><b>Prerequisite:</b> This step only concerns you if your ETH are already on your self-hosted EVM Wallet (e.g., Metamask, Rabby…). If your ETH are on a Cex, refer to the step - <u><a onClick={() => setCurrentStep(3)}>Withdrawing Your UCO from a Cex</a></u>. The process is the same for both UCO and ETH.</li>
                <li>The next operation will first consist of transferring your ETH to Polygon PoS if they are not already there.</li>
                <li><b>Note regarding ETH bridging from Ethereum:</b> ETH is the local Coin of the Ethereum Blockchain. The ETH bridge from Ethereum to Polygon involves transferring ETH and also transforming these Coins into ERC-20 WETH Tokens on the Polygon PoS Blockchain (whose Coin is MATIC).</li>
                <li>Log on to <u><a href="https://app.rango.exchange/swap/" target="_blank" rel="noopener noreferrer">https://app.rango.exchange/swap/</a></u><br />
                    Rango Exchange helps find the least expensive bridge for the operation.</li>
                <img src="/img/tutorial/Tuto-DeFi-3.png" />
                <li>Connect your self-hosted EVM Wallet</li>
                <li>Select the blockchain where your ETH are located (e.g., Ethereum) for transfer</li>
                <li>Select Polygon as the destination and WETH as the incoming token</li>
                <li>Rango Exchange will propose the optimal route for the transfer: select the optimal route.</li>
                <li>Click on "Exchange".</li>
                <li>Once the transfer is initiated, follow the instructions: The bridge will require several steps, several minutes, and authorizations (signatures) to be completed sequentially in your self-hosted EVM Wallet.</li>
                <li>Once the bridge is completed, you will receive a success message.</li>
                <li>The result of your bridge will materialize as the expected amount of WETH in your self-hosted EVM Wallet on the Polygon PoS blockchain</li>
            </ul>
            <h3>Would you like to know how to transfer your WETH to Archethic?</h3>
            <button className="button" onClick={() => setCurrentStep(6)}>Yes, I want to know the procedure</button><br /><br />
            <button className="button" onClick={goBack}>Back</button><br /><br />
        </div>
    );
}

function StepSix() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Transferring Your WETH to Archethic</h2><br />
            <ul>
                <li><b>Prerequisite:</b> This step only concerns you if your WETH are already on your self-hosted EVM Wallet (e.g., Metamask, Rabby…) and on the Polygon PoS.</li>
                <li>The WETH bridge will require paying fees on the Polygon PoS blockchain. Ensure you have sufficient MATIC on your self-hosted EVM Wallet for this purpose.</li>
                <li>The following operation involves sending your WETH from the Polygon PoS blockchain to Archethic.</li>
                <li>By the way, for your information, this operation will transform your ERC-20 WETH Tokens into aeETH Tokens on Archethic.</li>
                <li>Launch your Archethic Wallet (or create one by following the step <u><a onClick={() => setCurrentStep(2)}>Creating an Archethic Wallet</a></u>)</li>
                <li>Ensure that your self-hosted EVM Wallet is on the address and blockchain that hold your WETH for transfer</li>
                <li>Access the Archethic Bridge: <u><a href="https://bridge.archethic.net/" target="_blank" rel="noopener noreferrer">https://bridge.archethic.net/</a></u></li>
                <li>In the main window:</li>
                <img src="/img/tutorial/Tuto-DeFi-1.png" />
                <ul>
                    <li>Select the Polygon PoS Blockchain as the origin</li>
                    <li>Select Archethic as the destination.</li>
                    <li>Once the origin and destination blockchains are selected, choose WETH as the token to send</li>
                    <li>Based on your available WETH, enter the amount to transfer</li>
                    <li>Click on "Bridge" to initiate the transfer</li>
                    <li><b>Note: Do not hesitate to make a first trial with a small amount.</b></li>
                </ul>
                <img src="/img/tutorial/Tuto-DeFi-4.png" />
                <li>Once the transfer is initiated, follow the guidelines: The bridge will require several steps, several minutes, and multiple authorizations (signatures) to be completed sequentially in your self-hosted EVM Wallet and in your Archethic Wallet.</li>
                <li>Once the bridge is completed, you will receive a success message.</li>
                <li>If the amount of aeETH does not immediately appear in your Archethic Wallet, do not hesitate to click on the "Refresh" button</li>
            </ul>
            <h3>Congratulations! You now know everything! You can now enjoy the Archethic ecosystem</h3>
            <button className="button" onClick={goBack}>Back</button><br /><br />
        </div>
    );
}
