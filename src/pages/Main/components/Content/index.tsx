
import Auction from './components/Auction';
import Wallet from './components/Wallet';

import style from './style.module.scss';

export default function Content() {
  return (
    <>
      <Auction />
      <Wallet />
      <div>
        <h1>Недавние NFT</h1>
      </div>
      <div>
        <h1>Недавние транзакции</h1>
      </div>
    </>
  );
}
