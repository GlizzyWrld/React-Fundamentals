import {Dog} from '../components';

export function DukeView() {
    const dog = {
        name: "Duke",
        age: 3,
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwyP6bsSDCWe-IQtTjDkhmJAhYO0pGOh9iw&usqp=CAU",
        facts: [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
        ]
    };
   
    return (
        <Dog dog={dog}/>
    )
}