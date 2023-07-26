import {Dog} from '../components';

export function PerryView() {
    const dog = {
        name: "Perry",
        age: 4,
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3CDLWcq2v9dVmbeWib3_1ubOMiCWDgHPZA&usqp=CAU",
        facts: [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
        ]
    };
   
    return (
        <Dog dog={dog}/>
    )
}