import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './fonts/Montserrat.ttf';
import './fonts/Montserrat-bold.ttf';
import {DropItems} from './DropItems';


function App() {
  return (
    <div className="App font-Montserrat">
      <div className='bg-info text-white'>
        <h4 className='font-Monsterrat-Bold'>IMPACT</h4>
        <p>система мотивации участников Телеграм-сообществ</p>
      </div>
      <Container >
      <div className='d-flex flex-row justify-content-between text-start'>
        <div className='m-2' style={{width:'60%'}}>
          <p className='classFont text-info '>НОВЫЕ ВОЗМОЖНОСТИ ДЛЯ ТЕЛЕГРАМ-ЧАТОВ</p>
          <h2 className=''><b>Как повысить полезную активность участников сообщества?</b></h2>
          <ul className='classFont'>
            <li>Мотивация и поддержка авторов контента</li>
            <li>Привлечение новых полезных подписчиков</li>
            <li>Единый Магазин Бонусов для Телеграма</li>
          </ul>
        </div>
        <div className='m-2'></div>
      </div>

      <h1 className='p-5'><b>Ваш Собственный Монетный Двор</b></h1>
      <div className='row justify-content-center text-white text-start'>
        <div className='col-xl-5 col-lg-5 col-md-5 m-2 p-5 bg-info'>
          <h6><b>Создайте монету вашего сообщества прямо в Телеграм-боте</b></h6>
          <p className='classFont'>Несколько минут - и вы получаете собственный Монетный двор для вашего сообщества!</p>
        </div>
        <div className='col-xl-5 col-lg-5 col-md-5 m-2 p-5 bg-info'>
          <h6><b>Награждайте своей монетой участников сообщества</b></h6>
          <p className='classFont'>Поддерживайте полезный и интересный контент звонкой монетой, просто пересылая сообщения в бот!</p>
        </div>
      </div>



      <h1 className='p-5'><b>Ваш Магазин Бонусов</b></h1>
{/*       <DropItems/> */}
      <div className='row justify-content-center text-white text-start'>
        <div className='col-xl-5 col-lg-5 col-md-5 m-2 p-5 bg-danger'>
          <h6><b>Предложите уникальные бонусы сообщества в обмен на монеты</b></h6>
          <p className='classFont'>Лучшие авторы обменяют полученные от вас монеты на скидки, подписки и другие плюшки вашего сообщества</p>
        </div>
        <div className='col-xl-5 col-lg-5 col-md-5 m-2 p-5 bg-danger'>
          <h6><b>Привлекайте новых участников рекламными бонусами</b></h6>
          <p className='classFont'>Полезные участники других сообществ обменяют свои монеты на валюту Импакта и купят ваши специальные бонусы для новичков</p>
        </div>
      </div>
      <p className='text-start classFont'><b>Магазин Бонусов</b> на сайте Импакта - одновременно ваша закрытая площадка "для своих" и витрина для привлечения полезных участников в ваше сообщество</p>
      <div>
        <h3 className='p-5'><b>Как работает Импакт?</b></h3>
      </div>
      <div className='py-5 row justify-content-center text-start'>
        <div className='col-xl-3 m-2'>
          <div className='number'>1</div>
          <h6 className='text-danger'>Вы отмечаете сообщения в чате...</h6>
          <span className='classFont'>Можно отметить сразу несколько сообщений от одного или разных авторов</span>
        </div>
        <div className='col-xl-3 m-2'>
          <div className='number'>2</div>
          <h6 className='text-danger'>...пересылаете их в Impact Community Bot...</h6>
          <span className='classFont'>Переслать  выбрать бот в списке  "Отправить". Всё остальное сделает бот</span>
        </div>
        <div className='col-xl-3 m-2'>
          <div className='number'>3</div>
          <h6 className='text-danger'>...и авторы получают ваши монеты</h6>
          <span className='classFont'>Через пару секунд участник сообщества видит монеты у себя в Impact User Bot</span>
        </div>
      </div>
      </Container> 
      <div className='bg-info text-white p-5'>
        <h3 className='p-3'><b>Статистика и Рейтинги</b></h3>
        <p className='p-1'>Самые полезные участники вашего сообщества</p>
        <p className='p-1'>Самые полезные пользователи всего Импакта</p>
        <p className='p-1'>Самые щедрые сообщества</p>
        <p className='p-1'>Самые полезные сообщества</p>
        <p className='p-1'>Полная статистика по монетам и бонусам</p>
      </div>
      <Container className='pt-5'style={{width:'70%'}}> 
        <h3 className='pt-5'><b>Безопасно, Прозрачно, Просто</b></h3>
        <div className='text-start classFont pt-3 pb-5'>
          <p className='my-4'>Импакт - это Телеграм боты и интернет-магазин с виртуальными товарами за игровые монеты</p>
          <p className='my-4'>Телеграм-боты Импакта <b>не добавляются в ваши чаты</b>, а значит, не следят за публикациями и не могут в них вмешиваться, как многие другие боты в Телеграме</p>
          <p className='my-4'>Ваша главная ценность в Импакте - <b>социальный капитал сообщества</b> - хранится в блокчейне и принадлежит только вам. Даже мы не имеем к нему доступа</p>
          <p className='my-4'>Все транзакции с монетами публикуются в <b>блокчейне</b> и могут быть проверены вами</p>
          <p className='my-4'>Всю сложность блокчейн-решений и взаимодействия с Телеграмом мы взяли на себя и спрятали "под капот"</p>
          <p className='my-4'>Для вас и участников ваших сообществ Импакт не сложнее компьютерной игры</p>
          <p className='my-4'>Импакт <b>не собирает и не хранит</b> персональную информацию о владельцах и участниках сообществ. Мы используем только данные из Телеграма, которые вы предоставили сами</p>
        </div>
      </Container>
      <div className='bg-dark text-white '>
          <h1>IMPACT</h1>
          <span className='text-secondary'>По всем вопросам:</span><br />
          <span className='text-secondary'>Светлана Макаревская</span><br />
          <a className='' href="">t.me/Svetlana_IMPACT</a>

      </div>
    </div>
  );
}

export default App;