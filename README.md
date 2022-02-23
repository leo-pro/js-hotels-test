# Nearly empty javascript project with a failing test!

To install the required modules:

```
$ yarn install
```

To run the (failing) test:

```
$ yarn test
```

**Exemplos:**

**Entrada 1:**

Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)

**Saída 1:**

Parque das flores

**Entrada 2:**

Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)

**Saída 2:**

Jardim Botânico

**Entrada 3:**

Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)

**Saída 3:**

Mar Atlântico

### **Resolution**

[ ] Analisar a tabela com as informações sobre os hotéis
[ ] Criar uma database com as informações dos hotéis (Mock com JSON)
[ ] Criar um método em uma pasta _/utils_ para que separe e retorne o tipo do cliente e as datas
[ ] Criar um método no arquivo principal (_app.js_) que recebe o input e retorna o hotel mais barato
[ ] Criar os 3 cenários de teste e o teste da função que deve retornar o tipo do cliente e as datas
