import '../Styling/index.css';
import '../Styling/output.css';

/*
Summary: This file defines the Card Components that will represent notes and the CardRow Components that will be used to organize the Cards
*/

/**
 * Card: This component represents a card that will be placed in a CardRow
 * @param {children} children: The children of the Card
 * */
function Card({children}){
    return (
      <div className="h-5/6 w-1/8 p-8 shadow-lg bg-gray-400 hover:bg-gray-300">
        {children}
        </div>
    );
}

/**
 * CardRow: This component represents a row of cards that will be placed in a CardRowContainer
 * @param {children} children: The children of the CardRow
 * */
function CardRow(){
    return (
      <div className="h-7/8 w-11/12 flex flex-row overflow-x-scroll scrollbar-hide gap-2 items-start">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    );
}
  
/**
 * The CardRowContainer represents the notes of a particular Tag reperesented by the text
 * @param {text} text: The text that will be displayed on the CardRowContainer
 * @param {children} children: The children of the CardRowContainer
 * @param {color} color: The color of the CardRowContainer
 */
function CardRowContainer({text, children, color}){
    const containerCSS = ['h-1/8', 'w-full', 'flex', 'flex-col', 'mx-4', 'my-4', 'p-2', 'shadow-lg', 'items-start', 'rounded-2xl', color]
    const containerCSSFINAL = containerCSS.join(' ')
    return (
      <div className={containerCSSFINAL}>
        <h1 className="text-white font-extrabold text-2xl justify-center">{text}</h1>
        <div className="h-1/8 w-full flex flex-col mx-5 my-4 p-2 items-start ">
        {children}
        </div>
        </div>
    );
  }

export {Card, CardRow, CardRowContainer};