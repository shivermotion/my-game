import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from 'react-modal';


export const CollectionsCard = () => {
  const [items, setItems] = useState(Array.from({ length: 36 }));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const fetchData = () => {
    // You can fetch more data here
    const moreItems = Array.from({ length: 36 });
    setItems([...items, ...moreItems]);
  };

  const openModal = (item: any) => {
    setCurrentItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card shadow-lg p-4 rounded-3xl bg-[#FED7AA] m-8 border-2 border-orange-600 ">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-6 gap-4   ">
          {items.map((item, index) => (
            <button key={index} onClick={() => openModal(item)} className='p-12 border-2 border-orange-600 rounded-3xl bg-[#ECFEFF] '>
              Button {index}
            </button>
          ))}
        </div>
      </InfiniteScroll>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >
        <div className="flex ">
          <img src={ "https://placehold.co/600x400"} alt="" className="w-1/2 p-4  " />
          <div className="text w-1/2 p-4 ">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</div>
        </div>
      </Modal>
    </div>
  );
}


