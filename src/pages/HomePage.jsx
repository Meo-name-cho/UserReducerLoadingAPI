import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList/index';

HomePage.propTypes = {

}
const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000));
}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    // const hobbyState = useSelector(state => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.list,
    // }), shallowEqual);


    const dispatch = useDispatch()

    console.log("hobby list", hobbyList);

    const handleAddHobbyClick = () => {
        // random a hobby object : id +title
        const newId = randomNumber()
        const newHobby = {
            // id:casual.uuid,
            // title: casual.title,
            id: newId,
            title: `Hobby ${newId}`
        }
        // dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);

    }
    const handleHobbyClick=(hobby)=>{
        const action = setActiveHobby(hobby);
        dispatch(action);
    }
    return (
        <div className="home__page">
            <h1>thinh handsome</h1>
            <button onClick={handleAddHobbyClick} >Random hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    )
}

export default HomePage;
