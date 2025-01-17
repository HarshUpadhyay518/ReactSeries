/* eslint-disable react/prop-types */
function Profile() {
    return(
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name="Harsh Upadhyay"
                age={20}
                greeting={
                    <div>
                        <strong>Hi Harsh, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>
            <ProfileCard
                name="Harsh Upadhyay"
                age={20}
                greeting={
                    <div>
                        <strong>Hi Harsh, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
}

function ProfileCard(props) {
    const {name,age,greeting,children} = props;
    return(
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    );
}

export default Profile;
