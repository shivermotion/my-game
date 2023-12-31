import React from 'react';
import { CollectionsCard } from '../../components/ui/cards/CollectionsCard/CollectionsCard';
import { Background } from '../MainMenu/Background/Background';


export const Collection: React.FC = () => {
  return (
    <>
    <Background/>
    <div >
      <h1 className=" justify-center flex shadow-lg p-4 rounded-3xl bg-[#FED7AA] m-8 border-2 border-orange-600   "><div className='animate-bounce'>Collection</div></h1>
      <CollectionsCard />
    </div>
    </>
  );
}

