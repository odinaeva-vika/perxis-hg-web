document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);

  function init() {
    const balloonData = [
      {
        name: "Dealer Company Name 1",
        address: "Москва, ул. Автодилерская, 23, стр. 1",
        sales: {
          phone: "+7 (495) 428 12 94",
          hours: ["пн-пт: 09:00-21:00", "сб, вс: 10:00-20:00"],
        },
        service: {
          phone: "+7 (495) 428 12 95",
          hours: ["пн-сб: 08:00-22:00", "вс: 09:00-21:00"],
        },
      },
      {
        name: "Dealer Company Name 2",
        address: "Москва, ул. Сервисная, 15, стр. 2",
        sales: {
          phone: "+7 (495) 123 45 67",
          hours: ["пн-пт: 08:00-20:00", "сб: 09:00-18:00", "вс: выходной"],
        },
        service: {
          phone: "+7 (495) 123 45 68",
          hours: ["пн-пт: 08:00-22:00", "сб: 09:00-20:00", "вс: 10:00-18:00"],
        },
      },
    ];

    let myMap = new ymaps.Map("map", {
      center: [55.84574430943286, 37.4797240691605], //координаты центра
      zoom: 11, //уровень приближения
    });

    let myPlacemark = new ymaps.Placemark(
      [55.869244167790185, 37.48576681476805],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/Pin-2.svg",
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -75],
      }
    );

    let myPlacemark2 = new ymaps.Placemark(
      [55.82802201250673, 37.33260796910063],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/Pin-2.svg",
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -70],
      }
    );

    const balloon = document.getElementById("balloon");

    // Добавим переменную для хранения текущей активной метки
    let currentActiveMarker = null;

    myPlacemark.events.add("click", function () {
      document.getElementById("balloon").innerHTML = createBalloonContent(
        balloonData[0]
      );

      // Возвращаем исходное изображение для предыдущей активной метки
      if (currentActiveMarker !== null) {
        currentActiveMarker.options.set("iconImageHref", "../img/Pin-2.svg");
        currentActiveMarker.geometry.setCoordinates(
          currentActiveMarker.geometry.getCoordinates()
        );
      }

      // Обновляем путь к изображению для кликнутой метки
      myPlacemark.options.set("iconImageHref", "../img/Pin-1.svg");

      // Обновляем метку на карте
      myPlacemark.geometry.setCoordinates(
        myPlacemark.geometry.getCoordinates()
      );

      // Обновляем текущую активную метку
      currentActiveMarker = myPlacemark;
    });

    myPlacemark2.events.add("click", function () {
      document.getElementById("balloon").innerHTML = createBalloonContent(
        balloonData[1]
      );

      // Возвращаем исходное изображение для предыдущей активной метки
      if (currentActiveMarker !== null) {
        currentActiveMarker.options.set("iconImageHref", "../img/Pin-2.svg");
        currentActiveMarker.geometry.setCoordinates(
          currentActiveMarker.geometry.getCoordinates()
        );
      }

      // Обновляем путь к изображению для кликнутой метки
      myPlacemark2.options.set("iconImageHref", "../img/Pin-1.svg");

      // Обновляем метку на карте
      myPlacemark2.geometry.setCoordinates(
        myPlacemark2.geometry.getCoordinates()
      );

      // Обновляем текущую активную метку
      currentActiveMarker = myPlacemark2;
    });

    balloon.innerHTML = createBalloonContent(balloonData[0]);

    myPlacemark.events.fire("click");

    function createBalloonContent(balloonData) {
      return `
 
      <h4 class="balloon__title">${balloonData.name}</h4>
      <address class="balloon__address">${balloonData.address}</address>
      <div class="balloon__boxes">
        <div class="balloon__box">
          <p class="balloon__box-title">Продажи:</p>
          <a class="balloon__box-tel" href="tel:${
            balloonData.sales.phone
          }">${balloonData.sales.phone}</a>
          ${balloonData.sales.hours
            .map((time) => `<p class="balloon__box-time">${time}</p>`)
            .join("")}
        </div>
        <div class="balloon__box">
          <p class="balloon__box-title">Сервис:</p>
          <a class="balloon__box-tel" href="tel:${
            balloonData.service.phone
          }">${balloonData.service.phone}</a>
          ${balloonData.service.hours
            .map((time) => `<p class="balloon__box-time">${time}</p>`)
            .join("")}
        </div>
      </div>
      <button class="button">
        <span>заказать звонок</span>
        <img src="../img/Icon-call.svg" alt="Иконка Телефона" />
      </button>
      `;
    }

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);

    myMap.controls.remove("geolocationControl"); // удаляем геолокацию
    myMap.controls.remove("searchControl"); // удаляем поиск
    myMap.controls.remove("trafficControl"); // удаляем контроль трафика
    myMap.controls.remove("typeSelector"); // удаляем тип
    myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove("rulerControl"); // удаляем контрол правил
  }
});
