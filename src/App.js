import './App.css';
import Header from "./header/Header";
import workPhoto from "./assets/oganovWork.jpg"

function App() {
  return (
    <div className="App">
        <Header/>
        <main className="main">
            <div className="education">
                <div className="wrapper">
                    <h2 className="education-title">Образование:</h2>
                    <p className="education-text">Санкт-Петербургский Государственный Педиатрический Медицинский
                        Университет, факультет Клинической Психологии</p>
                    <p className="education-text">Участник программы подготовки гештальт терапевтов Московского Гештальт
                        Института (МГИ)</p>
                    <p className="education-text">Участник программы обучения гештальт-подходу в работе с детьми и
                        семьей по модели Вайолет Оклендер.
                    </p>

                    <h2 className="education-title">Практики и стажировки:</h2>
                    <p className="education-text">2 года, в процессе обучения, проходил практику в СПб ГКУЗ Городская
                        психиатрическая больница №3 им.И.И. Скворцова-Степанова</p>
                    <p className="education-text">3 года в СПБНИПНИ им. В.М.Бехтерева на отделении реабилитации
                        психоневрологических больных
                    </p>
                </div>
            </div>

            <div className="career">
                <div className="wrapper wrap-wrap">
                    <div className="img-wrapper">
                        <img src={workPhoto} alt="workPhoto"/>
                    </div>
                    <div className="career-wrapper">
                        <h2 className="career-title">Карьера:</h2>
                        <p className="career-text">Научный сотрудник лаборатории нейрокогнитивных технологий
                            Санкт-Петербургского Государственного Педиатрического Медицинского Университета (2013- по
                            н.в. )</p>
                        <p className="career-text">Ассистент кафедры общей и прикладной психологии факультета
                            клинической психологии Санкт-Петербургского Государственного Педиатрического Медицинского
                            Университета (2016 - по н.в.)</p>
                        <p className="career-text">Психолог центра группового, семейного и парного психологического
                            консультирования "The Sun" (2015-2017г)</p>
                    </div>
                </div>
            </div>

            <div className="work">
                <div className="wrapper work-wrapper">
                    <div className="meeting">
                        <h2 className="work-title">Провожу:</h2>
                        <ul className="work-list">
                            <li className="work-item">Индивидуальные консультации</li>
                            <li className="work-item">Семейные и парные консультации</li>
                            <li className="work-item">Группы</li>
                            <li className="work-item">Тренинги</li>
                        </ul>
                    </div>

                    <div className="work-with">
                        <h2 className="work-title">Работаю с:</h2>
                        <ul className="work-list">
                            <li className="work-item">Различными личностными кризисами</li>
                            <li className="work-item">Сложностями в построении отношений</li>
                            <li className="work-item">Трудностями в отношениях с другими</li>
                            <li className="work-item">Тревожными состояниями</li>
                            <li className="work-item">Низкой самооценкой и неуверенностью в себе</li>
                            <li className="work-item">Общей неудовлетворенностью жизнью</li>
                            <li className="work-item">Ощущением запутанности, тупика</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="contacts">
                <div className="wrapper">
                    <h2>Контакты</h2>

                    <a href="tel:89633433632" className="tel">+7 (963) 343-36-32</a>
                    <p>Часы работы: 10:00 - 21:00</p>
                </div>
            </div>
        </main>
        <footer className="footer">
            <p className="footer-text">Lorem ipsum dolor sit amet.</p>
        </footer>
    </div>
  );
}

export default App;
