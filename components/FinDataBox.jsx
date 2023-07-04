import Image from 'next/image';
import { faArrowUp, faArrowDown, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Audio } from 'react-loader-spinner';

const FinDataBox = ({ finData, loading }) => {
  if (loading || finData === null) {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
  }

  /*   const iconsURLMap = {
    'NASDAQ:NDAQ': '/nasdaq-big.svg',
  }; */

  return (
    <div className="bg-white w-full rounded-lg py-4 px-8 h-full">
      {finData.map((stock) => {
        const isPositive24h = stock?.change_perc_today >= 0;
        const isPositive1h = (stock?.last_close - stock?.last_price) >= 0;

        return (
          <div key={stock.id} className="flex items-center my-2 py-2">
            <div className="mr-6 rounded-full shadow-2xl flex justify-center items-center">
              {/* <Image
                // src={iconsURLMap[stock.msh_id]}
                src="/nasdaq-big.svg"
                alt={stock.name}
                width={50}
                height={50}
              /> */}
              <FontAwesomeIcon icon={faChartSimple} className="text-black text-3xl mx-1" />
            </div>
            <div className="flex-1 flex-col">
              <div className="flex font-extrabold">{stock?.ticker}</div>
              <div className="flex">{stock?.msh_id}</div>
            </div>
            <div className="text-sm flex flex-col items-end">
              <span
                className={`mr-1 font-extrabold text-xl ${' '}`}
              >
                ${stock?.last_price.toFixed(2)}
              </span>
              <span
                className={`${isPositive24h ? 'bg-green-500' : 'bg-red-500'} flex px-8 justify-center items-center text-white font-bold rounded-lg text-center w-1/2 px-2`}
              >
                {isPositive1h
                  ? <FontAwesomeIcon icon={faArrowDown} className="text-white mx-1" />
                  : <></>}
                {!isPositive1h
                  ? <FontAwesomeIcon icon={faArrowUp} className="text-white mx-1" />
                  : <></>}
                {` ${stock?.change_perc_today.toFixed(2)}`}%
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FinDataBox;
