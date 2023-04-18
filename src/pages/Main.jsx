import React, {useEffect, useState} from 'react';
import {useGateway} from "../hooks/useGateway";
import {useFetching} from "../hooks/useFetching";
import {useKeycloak} from "@react-keycloak/web";
import CharacterViewer from "../components/CharacterViewer";
import Characters from "../components/Characters";
import Animations from "../components/Animations";
import CenterModal from "../components/UI/modal/CenterModal";
import UploadModel from "../components/UploadModel";
import UploadAnimation from "../components/UploadAnimation";

const Main = ({route}) => {
    const gateway = useGateway()
    const {keycloak} = useKeycloak()
    const [characterFiles, setCharacterFiles] = useState([])
    const [animationFiles, setAnimationFiles] = useState([])
    const [character, setCharacter] = useState(undefined)
    const [animation, setAnimation] = useState(undefined)
    const [isCharactersModalVisible, setCharactersModalVisible] = useState(false)
    const [isAnimationsModalVisible, setAnimationsModalVisible] = useState(false)

    const [getCharacterFiles, isLoadingCharacterFiles, getCharactersFilesError] = useFetching(async () => {
        let response = await gateway.getFiles("CHARACTER")
        if (response.status === 200) {
            setCharacterFiles(response.data)
            if (characterFiles.length) {
                setCharacter(characterFiles[0])
            }
        } else setCharacterFiles([])
    })
    const [getAnimationFiles, isLoadingAnimationFiles, getAnimationFilesError] = useFetching(async () => {
        let response = await gateway.getFiles("ANIMATION")
        if (response.status === 200) {
            setAnimationFiles(response.data)
        } else setCharacterFiles([])
    })

    useEffect(() => {
        if (keycloak.authenticated) {
            getCharacterFiles()
            getAnimationFiles()
        }
    }, [keycloak.authenticated])
    return (
        <div>
            <div className="upload-section">
                <div onClick={() => setCharactersModalVisible(true)} className="upload-button">
                    Загрузить персонажа
                </div>
                <div onClick={() => setAnimationsModalVisible(true)} className="upload-button">
                    Загрузить анимацию
                </div>
            </div>
            <CenterModal visible={isCharactersModalVisible} setVisible={setCharactersModalVisible}>
                <UploadModel setVisible={setCharactersModalVisible}/>
            </CenterModal>
            <CenterModal visible={isAnimationsModalVisible} setVisible={setAnimationsModalVisible}>
                <UploadAnimation setVisible={setAnimationsModalVisible}/>
            </CenterModal>
            <div className="characters">
                {route === "characters" &&
                    <Characters charactersFiles={characterFiles} setCharacter={setCharacter}/>
                }
                {route === "animations" && character &&
                    <Animations animationFiles={animationFiles} setAnimation={setAnimation}/>
                }
                <div className="character-scene">
                    {character
                        ? <CharacterViewer character={character} animation={animation}/>
                        : <div></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;