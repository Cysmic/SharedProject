import './Styling/index.css';
import './Styling/output.css';

import {useRef} from 'react';
import {motion} from 'framer-motion';

import {Card, CardRow, CardRowContainer} from './CardDir/CardSection'
import {Template1, Template2, Template3} from './Containers&Templates/Templates'
import {ContainerPrimary, ContainerAuxilary} from './Containers&Templates/Containers'

function App() {

  const screenRef = useRef(null);

  return (
    <div className="bg-gray-800 flex flex-row w-screen h-screen justify-evenly" ref={screenRef}>
      <ContainerAuxilary>
      <motion.div className="h-full" drag='x' dragConstraints={screenRef} dragMomentum={false}>
        <Template1>
        <CardRowContainer text="-" color='bg-blue-300'>{CardRow()}</CardRowContainer>
        <CardRowContainer text="--" color='bg-green-300'>{CardRow()}</CardRowContainer>
        <CardRowContainer text="---" color='bg-red-300'>{CardRow()}</CardRowContainer>
        </Template1>
        </motion.div>
      </ContainerAuxilary>
      <ContainerPrimary>
        <motion.div className="h-full" drag='x' dragConstraints={screenRef} dragMomentum={false}>
        <Template2 >
        <h1 className="text-white font-extrabold text-2xl mx-auto">Hello, world!</h1>
        <p className="text-white">Welcome to your new Tailwind CSS + React project!</p>
        </Template2>
        </motion.div>
      </ContainerPrimary>
      <ContainerAuxilary>
      <motion.div className="h-full" drag='x' dragConstraints={screenRef} dragMomentum={false}>
        <Template3>
        <h1 className="text-white font-extrabold text-2xl mx-auto">Hello, world!</h1>
        <p className="text-white">Welcome to your new Tailwind CSS + React project!</p>
        </Template3>
        </motion.div>
      </ContainerAuxilary>
    </div>
  );
}

export default App;
