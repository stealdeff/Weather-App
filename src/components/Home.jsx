
const Home=()=>{
return  (
    <div>
      <header>
<h1> Home</h1>
</header>
     
<main id="homeid" style={{ fontFamily: 'monospace', fontSize: '18px' }}>
      <section>
        <h2>Основные возможности:</h2>
        <ul>
          <li>Получение курсов валют на текущую дату</li>
          <li>Анализ динамики курсов валют за выбранный период</li>
          <li>Конвертация валют по актуальному курсу</li>
        </ul>
      </section>

      <section>
        <h2>Как пользоваться приложением:</h2>
        <ol>
          <li>Перейдите на вкладку "Курсы валют" для получения актуальных курсов на текущую дату.</li>
          <li>Чтобы проанализировать динамику курсов, перейдите на вкладку "Динамика курсов" и выберите интересующую вас валюту и период.</li>
          <li>Для конвертации валют, используйте вкладку "Конвертер валют".</li>
        </ol>
      </section>

      <section>
        <h2>О разработчике:</h2>
        <p>
          Это приложение было разработано Ариной Юрьевной, начинающим frontend-разработчиком. Вы можете связаться со мной по телеграмму: <a href="https://t.me/she_is_arina">she_is_arina</a>.
        </p>
      </section>

      <section>
        <h2>Другие ресурсы:</h2>
        <ul>
          <li><a href="https://github.com/stealdeff">GitHub</a></li>
          <li><a href="mailto:Ukam.naletko@mail.ru">Ukam.naletko@mail.ru</a></li>
        </ul>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 Приложение мониторинга курсов валют. Все права защищены.</p>
    </footer>
  </div>
);
};

export default Home;
