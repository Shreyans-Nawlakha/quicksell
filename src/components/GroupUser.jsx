import React from 'react'
import values from "../default.json"
import UserWindow from '../pages/UserWindow'

const GroupUser = ({content, order }) => {
  return (
    <div className=" px-2 flex justify-start">
    {values.user.map((s) => {
        return <UserWindow data={content} order={order} userid={s.id} username={s.name} />
    })}
</div>
  )
}

export default GroupUser
