import './Styling/index.css';
import './Styling/output.css';

import {useRef} from 'react';
import {motion} from 'framer-motion';

import {Card, CardRow, CardRowContainer} from './CardDir/CardSection'
import {DirectoryTemplate, NoteTemplate, OnlineTemplate} from './Containers&Templates/Templates'
import {ContainerPrimary, ContainerAuxilary} from './Containers&Templates/Containers'

function App() {

  const screenRef = useRef(null);

  return (
    <div className="bg-gray-800 flex flex-row w-screen h-screen justify-evenly" ref={screenRef}>
      <ContainerAuxilary>
      <motion.div className="h-full" drag='x' dragConstraints={screenRef} dragMomentum={false}>
        <DirectoryTemplate>
        <CardRowContainer text="Spirituality" color='bg-blue-300'>{CardRow()}</CardRowContainer>
        <CardRowContainer text="Islam" color='bg-green-300'>{CardRow()}</CardRowContainer>
        <CardRowContainer text="Philosophy" color='bg-red-300'>{CardRow()}</CardRowContainer>
        </DirectoryTemplate>
        </motion.div>
      </ContainerAuxilary>
      <ContainerPrimary>
        <motion.div className="h-full" drag='x' dragConstraints={screenRef} dragMomentum={false}>
        <NoteTemplate >
        <h1 className="text-white font-extrabold text-2xl mx-auto">Hello, world!</h1>
        <p className="text-white">Welcome to your new Tailwind CSS + React project!</p>
        </NoteTemplate>
        </motion.div>
      </ContainerPrimary>
      <ContainerAuxilary>
      <motion.div className="h-full" drag='x' dragConstraints={screenRef} dragMomentum={false}>
        <OnlineTemplate>
        </OnlineTemplate>
        </motion.div>
      </ContainerAuxilary>
    </div>
  );
}

export default App;
