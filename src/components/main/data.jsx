const bestSellers = [
    {
      id: 1,
      name: "High",
      descrShort: "крем для лица",
      descr:
        "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
      composition:
        "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
      application:
        "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.",
      volume: { small: "30", big: "50" },
      price: { small: "590", big: "990" },
    },
    {
      id: 2, 
      name: "Rest",
      descrShort: "минеральная пудра",
      descr:
        "минеральная пудра идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
      composition:
        "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
      application:
        "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.",
      volume: { small: "20", big: "40" },
      price: { small: "690", big: "990" },
    },
    {
        id: 3, 
      name: "Rose",
  
      descrShort: "крем для лица",
      descr:
        "крем для лица идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
      composition:
        "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
      application:
        "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.",
      volume: { small: "30", big: "50" },
      price: { small: "700", big: "890" },
    },
    {
        id: 4, 
      name: "Milk",
      descrShort: "масло для тела",
      descr:
        "масло для тела идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
      composition:
        "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
      application:
        "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.",
      volume: { small: "150", big: "300" },
      price: { small: "790", big: "1500" },
    },
    {
        id: 5, 
      name: "High",
      descrShort: "крем для лица",
      descr:
        "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
      composition:
        "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
      application:
        "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.",
      volume: { small: "30", big: "50" },
      price: { small: "590", big: "990" },
    },
    {
        id: 6, 
      name: "Rest",
      descrShort: "минеральная пудра",
      descr:
        "минеральная пудра идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
      composition:
        "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
      application:
        "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.",
      volume: { small: "20", big: "40" },
      price: { small: "690", big: "990" },
    },
    {
        id: 7, 
      name: "Rose",
  
      descrShort: "крем для лица",
      descr:
        "крем для лица идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
      composition:
        "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
      application:
        "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.",
      volume: { small: "30", big: "50" },
      price: { small: "700", big: "890" },
    },
    {
        id: 8, 
      name: "Milk",
      descrShort: "масло для тела",
      descr:
        "масло для тела идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
      composition:
        "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
      application:
        "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.",
      volume: { small: "150", big: "300" },
      price: { small: "790", big: "1500" },
    },
    {
        id: 9, 
      name: "High",
      descrShort: "крем для лица",
      descr:
        "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
      composition:
        "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
      application:
        "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.",
      volume: { small: "30", big: "50" },
      price: { small: "590", big: "990" },
    }
  ];
   
  export {bestSellers};
  