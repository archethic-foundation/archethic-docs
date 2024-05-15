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
            <h2>Bienvenue dans le guide interactif d&rsquo;utilisation du Bridge Archethic</h2>
            <h3>Ce tutoriel va vous permettre de vous expliquer les points suivants:</h3>
            <ul>
                <li>Récupérer et créer un Wallet Archethic</li>
                <li>Retirer vos UCO ERC20 depuis un Exchange Centralisé (CEx)</li>
                <li>Transférer vos UCO ERC20 vers Archethic</li>
                <li>Transférer vos ETH vers Polygon PoS</li>
                <li>Transférer vos WETH vers Archethic</li>
            </ul>
            <button className="button" onClick={() => setCurrentStep(1)}>Commencer le tutoriel</button><br />
            <br />
        </div>
    );
}

function StepOne() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Création d’un Wallet Archethic</h2>
            <h3>Souhaitez savoir comment créer votre Wallet Archethic ?</h3>
            <button className="button" onClick={() => setCurrentStep(2)}>Oui, je souhaite connaitre la procédure</button><br /><br />
            <button className="button" onClick={() => setCurrentStep(3)}>Non, je souhaite aller directement à l'étape pour retirer mes UCO ERC20 depuis un Exchange Centralisé</button><br /><br />
            <button className="button" onClick={goBack}>Retour</button><br /><br />
            <br />
        </div>
    );
}


function StepTwo() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Création d’un Wallet Archethic</h2>
            <h3>Comment créer un wallet sur la blockchain Archethic ?</h3>
            <ul>
                <li>Tout d&rsquo;abord, téléchargez <u><a href="https://www.archethic.net/wallet" target="_blank" rel="noopener noreferrer">ici</a></u> l'application du wallet selon que vous êtes sur Mac, Linux ou sur PC :</li>
                <li>Une fois installée, vous pouvez lancer l&rsquo;application.</li>
                <ul>
                    <li>La première page vous invite à lire et à accepter la politique de confidentialité</li>
                    <li>Une fois acceptée, vous pouvez cliquer sur &quot;Get started&quot; pour commencer à créer votre portefeuille.<br />
                        IMPORTANT : Dans la fenêtre qui s’affiche, pensez à vérifier en faut à droite que c’est bien Archethic Main Network
                        qui est sélectionné !</li>
                </ul>
                <li>Commencez par donner un nom à votre premier compte au sein de votre futur trousseau décentralisé.</li>
                <li>Une fenêtre de confirmation apparaît pour vérifier que le nom du compte vous convient.</li>
                <li>L&rsquo;application vous rappelle des informations de sécurité importantes pour protéger vos fonds et votre
                    phrase secrète.</li>
                <li>Après avoir lu les informations, cliquez sur &quot;Je comprends&quot;.</li>

                <li>Les 24 mots de votre phrase secrète s&rsquo;affichent.<br />
                    <b>A ce stade, vous pouvez choisir une liste de 24 mots en français ou en anglais (retenez bien ce choix !)<br />
                        Cette liste de 24 mots est confidentielle : ne la communiquez à personne et notez-la précautionneusement afin de pouvoir les confirmer dans l&rsquo;écran suivant<br />
                        Mettez cette liste en sécurité pour pouvoir la réutiliser à l’avenir.</b></li>
                <li>La confirmation nécessite de remettre les mots dans l&rsquo;ordre.</li>
                <li>Une fois le processus de confirmation de l&rsquo;ordre des mots de la phrase secrète effectué, vous pouvez sélectionner le moyen de protéger votre application (code PIN, mot de passe, biométrie, YubiKey).</li>
                <li>Après quelques secondes d&rsquo;attente, votre Wallet Archethic est créé avec votre premier compte.</li>
                <li>A noter que le Wallet Archethic sera nécessaire à l’étape « Transférer vos UCO vers Archethic ».</li>
            </ul>
            <h3>Souhaitez-vous savoir comment retirer vos UCO d&rsquo;un échange centralisé ?</h3>
            <button className="button" onClick={() => setCurrentStep(3)}>Oui, je souhaite connaitre la procédure</button><br /><br />
            <button className="button" onClick={() => setCurrentStep(4)}>Non, je souhaite aller à l'étape suivante de transfert de mes UCO ERC20 vers Archethic</button><br /><br />
            <button className="button" onClick={goBack}>Retour</button><br /><br />
        </div >
    );
}

function StepThree() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Retirer vos UCO ERC20 depuis un échange centralisé (CEx)</h2>
            <h3>Cette étape ne vous concerne que si vos UCO sont sur un Exchange Centralisé (Probit ou Zebitex)</h3>
            <ul>
                <li><b>Pré-requis :</b> le retrait implique de disposer d’un Wallet auto-hébergé EVM (Metamask, Rabby…)</li>
                <ul>
                    <li>Si vous n’avez pas déjà un wallet existant, nous vous conseillons vivement Rabby qui est très sécurisé et très
                        simple d’utilisation. Vous pouvez le télécharger ici : <u><a href="https://rabby.io/" target="_blank" rel="noopener noreferrer">https://rabby.io/</a></u></li>
                    <li>Suivez les indications lors la création.</li>
                </ul>
                <li>Une fois le Wallet auto-hébergé EVM créé, les modalités de retrait dépendent du Cex utilisé :</li>
                <ul>
                    <li>Probit: Suivez les indications <u><a href="https://www.probit.com/en-us/hc/6701622935833#h.r9p7ohh44ezw" target="_blank" rel="noopener noreferrer">ici</a></u></li>
                    <li>Zebitex: Suivez les indications <u><a href="https://support.zebitex.com/hc/fr/articles/360017288659-Comment-faire-un-retrait" target="_blank" rel="noopener noreferrer">ici</a></u></li>
                </ul>
                <li><b>A noter :</b></li>
                <ul>
                    <li>Dans les 2 cas, l’adresse de votre Wallet auto-hébergé EVM vous sera demandé comme destination du
                        retrait.</li>
                    <li>Il est probable que vos UCO retirés soient envoyés vers la blockchain Ethereum.</li>
                    <li>Une fois le retrait réalisé, vos UCO sont dans votre wallet auto-hébergé et vous pouvez passer à l’étape
                        suivante.</li>
                </ul>
            </ul>
            <h3>Souhaitez-vous savoir comment transférer vos UCO ERC20 vers Archethic ?</h3>
            <button className="button" onClick={() => setCurrentStep(4)}>Oui, je souhaite connaitre la procédure</button><br /><br />
            <button className="button" onClick={() => setCurrentStep(5)}>Non, je souhaite aller à l'étape de transfert de mes ETH vers Polygon PoS</button><br /><br />
            <button className="button" onClick={goBack}>Retour</button><br /><br />
        </div>
    );
}


function StepFour() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Transférer vos UCO ERC20 vers Archethic</h2><br />
            <ul>
                <li><b>Pré-requis :</b></li>
                <ul>
                    <li>Cette étape ne vous concerne que si vos UCO sont déjà sur votre Wallet auto-hébergé EVM (Metamask, Rabby…)</li>
                    <li>Cette étape est indépendante de la blockchain EVM où se situent vos UCO et peut se réaliser de la même façon qu’ils soient sur Ethereum, Polygon ou la BNB Chain.</li>
                    <li>En revanche, le bridge des UCO va nécessiter de payer des frais sur la blockchain d’origine.<br />
                        <b>Assurez vous donc d’avoir suffisamment d’ETH sur Ethereum, de MATIC sur Polygon ou de BNB sur la BNB Chain.</b></li>
                </ul>
                <li>L’opération suivante consiste à envoyer vos UCO depuis la blockchain EVM vers Archethic.</li>
                <li>Au passage et pour information, cette opération va transformer vos Tokens ERC-20 en Coins UCO natifs (un Coin est la monnaie locale d’une blockchain et le UCO est la monnaie locale une fois sur Archethic)</li>
                <li>Lancez votre Wallet Archethic (ou créez en un en suivant l'étape <u><a onClick={() => setCurrentStep(2)} style={{ cursor: 'pointer' }}>Création d’un Wallet Archethic</a></u>)</li>
                <li>Assurez-vous que votre Wallet auto-hébergé EVM est bien sur l’adresse et la blockchain qui détiennent vos UCO à transférer</li>
                <li>Accédez au Bridge Archethic : <u><a href="https://bridge.archethic.net/" target="_blank" rel="noopener noreferrer">https://bridge.archethic.net/</a></u></li>
                <li>Dans la fenêtre principale: </li>
                <ul>
                    <li>Sélectionnez la Blockchain EVM où se situent vos UCO à transférer (Ethereum, Polygon ou la BNB Chain)</li>
                    <li>Sélectionner Archethic comme destination.</li>
                    <li>Une fois les Blockchains de départ et d’arrivée sélectionnées, choisissez UCO comme token/coin à envoyer/recevoir</li>
                    <li>En fonction de vos UCO disponibles, saisissez le montant à transférer</li>
                    <li>Cliquez sur « Bridge » pour lancer le transfert</li>
                    <li><b>A noter : n’hésitez pas à faire un premier essai avec un petit montant.</b></li>
                </ul>
                <img src="/img/tutorial/Tuto-DeFi-2.png" />
                <li>Une fois le transfert lancé, laissez vous guider par les indications: Le bridge va nécessiter plusieurs étapes, plusieurs minutes et plusieurs autorisations (signatures) à réaliser
                    successivement dans votre Wallet auto hébergé EVM et dans votre Wallet Archethic.</li>
                <li>Une fois le bridge réalisé, vous obtiendrez un message de succès.</li>
                <li>Si le montant de UCO n’apparaît pas immédiatement dans votre Wallet Archethic, n’hésitez pas à cliquer sur le
                    bouton « Refresh »</li>
            </ul>
            <p>Vous trouverez des informations complémentaires sur le Bridge dans la section <u><a href="/participate/bridge/" target="_blank">« Participate »</a></u> de ce wiki:  </p>
            <h3>Souhaitez-vous savoir comment transférer vos ETH vers Polygon PoS ?</h3>
            <button className="button" onClick={() => setCurrentStep(5)}>Oui, je souhaite connaitre la procédure</button><br /><br />
            <button className="button" onClick={() => setCurrentStep(6)}>Non, je souhaite aller à l'étape de transfert de mes WETH vers Archethic</button><br /><br />
            <button className="button" onClick={goBack}>Retour</button><br /><br />

        </div>
    );
}


function StepFive() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Transférer vos ETH vers Polygon PoS</h2><br />
            <ul>
                <li><b>IMPORTANT :</b> Le bridge d’ETH vers Archethic n’est possible que depuis la Blockchain Polygon PoS
                    Il est donc nécessaire de commencer par transférer vos ETH vers Polygon PoS avant de les bridger vers
                    Archethic.</li>
                <li><b>Pré-requis :</b></li>
                <ul>
                    <li>Cette étape ne vous concerne que si vos ETH sont déjà sur votre Wallet auto-hébergé EVM (Metamask,
                        Rabby…). Si vos ETH sont sur un Cex, reportez vous à l’étape - <u><a onClick={() => setCurrentStep(3)}>Retirer vos UCO depuis un Cex</a></u>. La
                        démarche est la même pour des UCO ou pour des ETH.</li>
                </ul>
                <li>L’opération suivante va consister dans un premier temps à transférer vos ETH vers Polygon PoS s’ils n’y sont
                    pas déjà.</li>
                <li><b>A noter concernant le bridge d’ETH depuis Ethereum :</b> ETH est le Coin (monnaie locale) de la Blockchain
                    Ethereum. Le bridge d’ETH depuis Ethereum vers Polygon va consister à transférer les ETH mais également à
                    transformer ces Coins en Tokens ERC-20 WETH sur la blockchain Polygon PoS (dont le Coin est le MATIC). En
                    résumé, vous allez envoyer des ETH et recevoir des WETH.</li>
                <li>Connectez vous sur <u><a href="https://app.rango.exchange/swap/" target="_blank" rel="noopener noreferrer">https://app.rango.exchange/swap/</a></u><br />
                    Rango Exchange permet de trouver le bridge le moins coûteux pour l’opération.</li>
                <img src="/img/tutorial/Tuto-DeFi-3.png" />
                <li>Connectez votre Wallet auto-hébergé EVM</li>
                <li>Sélectionnez la blockchain où se trouvent vos ETH (ici Ethereum) à transférer</li>
                <li>Sélectionnez Polygon comme destination et le WETH comme token d’arrivée</li>
                <li>Rango Exchange vous proposera la route optimisée pour le transfert : sélectionnez la route optimale.</li>
                <li>Cliquez sur « Echange ».</li>
                <li>Une fois le transfert lancé, laissez vous guider par les indications: Le bridge va nécessiter plusieurs étapes, plusieurs minutes et des autorisations (signatures) à réaliser
                    successivement dans votre Wallet auto-hébergé EVM.</li>
                <li>Une fois le bridge réalisé, vous obtiendrez un message de succès.</li>
                <li>Le résultat de votre bridge va se matérialiser par le montant attendu de WETH dans votre Wallet auto-hébergé
                    EVM sur le blockchain Polygon PoS</li>
            </ul>
            <h3>Souhaitez-vous savoir comment transférer vos WETH vers Archethic ?</h3>
            <button className="button" onClick={() => setCurrentStep(6)}>Oui, je souhaite connaitre la procédure</button><br /><br />
            <button className="button" onClick={goBack}>Retour</button><br /><br />
        </div>
    );
}


function StepSix() {
    const { setCurrentStep, goBack } = useContext(StepContext);
    return (
        <div>
            <h2>Transférer vos WETH vers Archethic</h2><br />
            <ul>
                <li><b>Pré-requis :</b></li>
                <ul>
                    <li>Cette étape ne vous concerne que si vos WETH sont déjà sur votre Wallet auto hébergé EVM ( Metamask ,
                        Rabby …) et sur Polygon PoS.</li>
                    <li>Le bridge des WETH va nécessiter de payer des frais sur la blockchain Polygon PoS. Assurez vous donc
                        d’avoir suffisamment de MATIC sur votre Wallet auto hébergé EVM à cet effet.</li>
                </ul>
                <li>L’opération suivante consiste à envoyer vos WETH depuis la blockchain Polygon PoS vers Archethic.</li>
                <li>Au passage et pour information, cette opération va transformer vos Tokens ERC 20 WETH en Tokens aeETH
                    sur Archethic.</li>
                <li>Lancez votre Wallet Archethic (ou créez en un en suivant l'étape <u><a onClick={() => setCurrentStep(2)}>Création d’un Wallet Archethic)</a></u></li>
                <li>Assurez vous que votre Wallet auto hébergé EVM est bien sur l’adresse et la blockchain qui détiennent vos
                    WETH à transférer</li>
                <li>Accédez au Bridge Archethic : <u><a href="https://bridge.archethic.net/" target="_blank" rel="noopener noreferrer">https://bridge.archethic.net/</a></u></li>
                <li>Dans la fenêtre principale :</li>
                <img src="/img/tutorial/Tuto-DeFi-1.png" />
                <ul>
                    <li>Sélectionnez la Blockchain Polygon PoS comme origine</li>
                    <li>Sélectionner Archethic (mainnet) comme destination.</li>
                    <li>Une fois les Blockchains de départ et
                        d’arrivée sélectionnées, choisissez WETH
                        comme token à envoyer</li>
                    <li>En fonction de vos WETH disponibles,
                        saisissez le montant à transférer</li>
                    <li>Cliquez sur « Bridge » pour lancer le
                        transfert</li>
                    <li>A noter : n ’hésitez pas à faire un premier
                        essai avec un petit montant.</li>
                </ul>
                <img src="/img/tutorial/Tuto-DeFi-2.png" />
                <li>Une fois le transfert lancé, laissez vous guider par les indications: Le bridge va nécessiter plusieurs étapes, plusieurs minutes et plusieurs autorisations (signatures) à réaliser
                    successivement dans votre Wallet auto hébergé EVM et dans votre Wallet Archethic.</li>
                <li>Une fois le bridge réalisé, vous obtiendrez un message de succès.</li>
                <li>Si le montant de aeETH n’apparaît pas immédiatement dans votre Wallet Archethic, n’hésitez pas à cliquer sur
                    le bouton « Refresh »</li>
            </ul>
            <h3>Bravo! Vous savez tout! Vous pouvez désormais profiter de l'écosystème Archethic</h3>
            <button className="button" onClick={goBack}>Retour</button><br /><br />
        </div >
    );
}


