import './EV.css';
export const EventPropagation = () =>{
    const handleGrantParent = () =>{
        console.log("GrandParent Clicked");
    };

    const handleParentClick = (event) => {
        event.stopPropagation();
        // console.log("Parent Clicked");
    };

    const handleChildClick = (event) =>{
        console.log(event);
        event.stopPropagation();
        console.log("Child Clicked");
    };

    return(
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrantParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
    );
};