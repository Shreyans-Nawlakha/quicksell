import React from 'react'
import values from "../default.json"
import UserWindow from '../pages/UserWindow'

const GroupUser = ({content, order }) => {
  return (
    <div className=" px-2 flex flex-wrap max-w-screen-2xl">
    {values.user.map((s) => {
        return <UserWindow key={s.id} data={content} order={order} userid={s.id} username={s.name} />
    })}
</div>
  )
}

export default GroupUser
