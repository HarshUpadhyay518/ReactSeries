export const ParentComponent = () =>{
    return(
        <section
            className={`p-4 h-lvh font-display tracking-wider flex flex-col 
            justify-center items-center bg-gray-900 text-white`}>
                <h1>Component A</h1>
                <ChildComponent data="React JS"/>
        </section>
    );
};

const ChildComponent = (props) => {
    return(
        <>
        <h2>Component B</h2>
        <GrandChildComponent data={props.data} />
        </>
    );
};

const GrandChildComponent = (props) => {
    return(
        <>
        <h3>Component C</h3>
        <GrandGrandChildComponent data={props.data} />
        </>
    );
};

const GrandGrandChildComponent = (props) => {
    return(
        <>
        <h4>hiiiilllloooooooooo {props.data}</h4>
        </>
    );
};