export const addNewHobby=(hobby)=>{
    return {
        type:'ADD_HOBBY',
        payload:hobby,
    }
    // type and payload laf mot action
    // actioncreater ham tao ra action
}
export const setActiveHobby=(hobby)=>{
    return {
        type:'SET_ACTIVE_HOBBY',
        payload:hobby,
    }
}