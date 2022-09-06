import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

function App() {
     const [TableData, setTableData] = useState([
          {
               price: 739.0,
               price_end: 793.0,
               image1: "https://img.5element.by/import/images/ut/goods/good_b886fb50-fa91-11eb-bb92-0050560120e8/sm-r860nzsacis-smart-chasy-samsung-galaxy-watch-4-40-mm-silver-1_600.jpg",
               image2: "https://img.5element.by/import/images/ut/goods/good_b886fb50-fa91-11eb-bb92-0050560120e8/sm-r860nzsacis-smart-chasy-samsung-galaxy-watch-4-40-mm-silver-2_600.jpg",
               image3: "https://img.5element.by/import/images/ut/goods/good_b886fb50-fa91-11eb-bb92-0050560120e8/sm-r860nzsacis-smart-chasy-samsung-galaxy-watch-4-40-mm-silver-5_600.jpg",
               name: "Smart-часы SAMSUNG Galaxy Watch 4 40 mm",
               members: 25,
               character:
                    "Экран:  1.2  Super AMOLED Звонки:  Управление и разговор Уведомления:  Входящие вызовы, Социальные сети, Данные о тренировке, Календарь, SMSЗащита от пыли и влаги:  IP68 NFC: Да",
               sale: 20 + "%",
               new: "Новинка",
          },
          {
               price: 11999,
               price_end: 16990,
               image1: "https://img.5element.by/import/images/ut/goods/good_d8928229-62ef-11ec-bb94-0050560120e8/mkq03rb-a-smart-chasy-apple-watch-se-gps-40mm-gold-aluminium-case-with-starlight-sport-band-1_600.jpg",
               image2: "https://img.5element.by/import/images/ut/goods/good_d8928229-62ef-11ec-bb94-0050560120e8/mkq03rb-a-smart-chasy-apple-watch-se-gps-40mm-gold-aluminium-case-with-starlight-sport-band-2_600.jpg",
               image3: "https://img.5element.by/import/images/ut/goods/good_d8928229-62ef-11ec-bb94-0050560120e8/mkq03rb-a-smart-chasy-apple-watch-se-gps-40mm-gold-aluminium-case-with-starlight-sport-band-3_600.jpg",
               name: "Смарт-часы APPLE Watch SE GPS Gold Aluminium Case with Starlight Sport Band 40mm",
               members: 11,
               character:
                    "Основные характеристики Экран:  1.57  AMOLED Звонки:  Управление и разговор Уведомления:  Входящие вызовы, E-mail, Социальные сети, Данные о тренировке, Будильник, Календарь, SMS Защита от пыли и влаги:  IP68 NFC: Да Максимальное время автономной работы:  18 ч",
               sale: 29 + "%",
          },
     ]);

     const [directionSort, setDirectionSort] = useState(true);

     const sortData = (field) => {
          const copyData = TableData.concat();

          let sortData;

          if (directionSort) {
               sortData = copyData.sort((a, b) => {
                    return a[field] > b[field] ? 1 : -1;
               });
          }
          sortData = copyData.reverse((a, b) => {
               return a[field] > b[field] ? 1 : -1;
          });
          setTableData(sortData);
          setDirectionSort(!directionSort);
     };

     return (
          <div className='App'>
               <div>
                    <button
                         class='button-28'
                         role='button'
                         onClick={() => sortData("price")}>
                         Цена
                    </button>
                    <button
                         class='button-28'
                         role='button'
                         onClick={() => sortData("name")}>
                         Название
                    </button>
                    <button
                         class='button-28'
                         role='button'
                         onClick={() => sortData("sale")}>
                         Скидка
                    </button>
                    <button
                         class='button-28'
                         role='button'
                         onClick={() => sortData("members")}>
                         Количество
                    </button>
               </div>
               {TableData.map((item) => (
                    <div className='component'>
                         <div className='img'>
                              <div>
                                   <div className='up_img'>
                                        <div className='new'>{item.new}</div>
                                        <div className='sale'>{item.sale}</div>
                                   </div>
                                   <div>
                                        <Carousel width='500px'>
                                             <div className='image'>
                                                  <img src={item.image1} />
                                             </div>
                                             <div className='image'>
                                                  <img src={item.image2} />
                                             </div>
                                             <div className='image'>
                                                  <img src={item.image3} />
                                             </div>
                                        </Carousel>
                                   </div>
                              </div>
                         </div>
                         <div className='opinion'>
                              <div>
                                   <div>
                                        <h3 className='name'>{item.name}</h3>
                                        <div className='priceList'>
                                             <span className='price'>
                                                  {item.price} Руб
                                             </span>
                                             <span className='price_end'>
                                                  {item.price_end} Руб
                                             </span>
                                        </div>
                                        <div className='members'>
                                             <span>
                                                  Количество {item.members} шт.
                                             </span>
                                        </div>
                                   </div>
                                   <div className='character'>
                                        {item.character}
                                   </div>
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     );
}

export default App;
