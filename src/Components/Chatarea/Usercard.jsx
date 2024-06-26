import React from 'react'
import { getAllMessage } from '../../Redux/ApiHandler'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers, setMessage } from '../../Redux/messageSlice'

const Usercard = ({data, isActive}) => {
  const authToken = useSelector(state => state.authToken.data)
  const dispatch = useDispatch()
  const onClickGetMessageHandler = async() => {
    dispatch(selectUsers(data._id))
    const response = await getAllMessage(authToken, data._id)
    if(response.status){
      dispatch(setMessage(response.messageList))
    }
  }
  return (
    <>
        <div className='user-card' onClick={() => onClickGetMessageHandler()}>
            <div className='profile-logo'>
              <img src='https://www.nicepng.com/png/detail/856-8561250_profile-pic-circle-girl.png' />
              <i class={`fa-solid fa-circle ${isActive ? '' : 'd-none'}`}></i>
            </div>
            <p className='name'>{data.email}</p>
        </div>
    </>
  )
}

export default Usercard
