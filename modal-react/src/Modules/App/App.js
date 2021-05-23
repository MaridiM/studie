import { useState } from 'react'
import sass from './style.module.sass'
import Modal from '../Modal'
import { useGetUsers, useGetTypes } from './@api'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalBody, setModalBody] = useState('')

  const [getUsers, { data: dataUsers, loading: loadingUsers }] = useGetUsers()
  const [getTypes, { data: dataTypes, loading: loadingTypes }] = useGetTypes()

  const clickBtn1 = () => {
    getTypes()
    setModalBody('types')
  }

  const backData = async () => setModalBody('users')

  const toggleModal = () => {
    setShowModal(!showModal)
    getUsers()
    setModalBody('users')
  }

  const JSXModalBody = (data) => data && data.map((item, idx) => (
    <div key={idx}>
      <span>{item.id} | {item.name || item.type }</span>
      <br/>
    </div>
    )
  )


  return (
    <div className={sass.App}>
      {
        showModal ? (
          <Modal 
            title={'Modal Title'}
            width={500} 
            blur={true}
            btnAlign={'right'}
            buttons={[
              ['Back Data', backData],
              ['Btn 1', clickBtn1],
            ]}
            loading={loadingUsers || loadingTypes}
            closeBtn={{
              position: 'right',
              closeByBtn: false,
              btnText: 'Close',
              topBtnText: '',
              icon: '',
              action: toggleModal
            }}
          >
            { modalBody === 'users'
                ? JSXModalBody(dataUsers) 
                : JSXModalBody(dataTypes) 
            }
          </Modal>
        ) : (
          <button 
            className={sass.btn}
            onClick={toggleModal}
          >Open Modal</button>
        )
      }

    </div>
  )
}

export default App
