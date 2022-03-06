<template>
  <div>
    <Message :msg="msg" v-show="msg" />
    <div>
      <form id="burger-form" @submit="createBurger">
        <div class="input-container">
          <label for="nome">Nome do cliente:</label>
          <input
            type="text"
            id="nome"
            name="name"
            v-model="nome"
            placeholder="Digite o seu nome:"
          />
        </div>

        <div class="input-container">
          <label for="pao">Escolha o pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha a carne do seu Burger:</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container" id="opcionais-container">
          <span id="opcionais-title" for="opcionais"
            >Selecione os opcionais:</span
          >
          <div
            class="checkbox-container"
            v-for="opcional in opcionaisdata"
            :key="opcional.id"
          >
            <input
              type="checkbox"
              name="opcionais"
              v-model="opcionais"
              :value="opcional.tipo"
              :id="opcional.id"
            />
            <label :for="opcional.id">{{ opcional.tipo }}</label>
          </div>
        </div>

        <div class="input-container input-btn">
          <input type="submit" class="submit-btn" value="Criar meu Burger" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'BurgerForm',
  components: {
    Message,
  },
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisdata: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      msg: null,
    }
  },
  methods: {
    async getIngredientes() {
      const req = await fetch('http://localhost:3000/ingredientes')
      const data = await req.json()
      this.paes = data.paes
      this.carnes = data.carnes
      this.opcionaisdata = data.opcionais
    },
    async createBurger(e) {
      e.preventDefault()
      const data = {
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: 'Solicitado',
      }
      const dataJson = JSON.stringify(data)
      const req = await fetch('http://localhost:3000/burgers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dataJson,
      })
      const res = await req.json()
      // colocar mensagem de
      this.msg = `Pedido Nº ${res.id} realizado com sucesso!`
      // limpar mensagem
      setTimeout(() => (this.msg = ''), 5000)
      // limpar os campos
      this.nome = ''
      this.carne = ''
      this.pao = ''
      this.opcionais = ''
    },
  },
  mounted() {
    this.getIngredientes()
  },
}
</script>

<style scoped>
#burger-form {
  max-width: 350px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  #burger-form {
    max-width: 650px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  #burger-form {
    justify-content: space-around;
  }
}
label {
  font-weight: 400;
  margin-bottom: 5px;
  color: #222;
  padding: 2px 0;
}
input,
select {
  padding: 7px 10px;
  width: 100%;
  background-color: #fff;
  outline: none;
  color: #333;
  font-size: 15px;
  border-radius: 3px;
  border: 1px solid #969696;
  height: 35px;
  display: block;
}
input::placeholder {
  opacity: 1;
}
#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
@media (min-width: 768px) {
  input,
  select {
    width: 300px;
  }
  #opcionais-container {
    margin: 10px;
  }
}
#opcionais-title {
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
  color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox-container {
  display: flex;
  align-items: start;
  margin-bottom: 15px;
  margin-right: 40px;
}
.checkbox-container label,
.checkbox-container input {
  border-left: none;
  width: auto;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.checkbox-container input {
  height: 16px;
  width: 16px;
  min-width: 22px;
  max-width: 22px;
  border: 1px solid #969696;
}
.checkbox-container label {
  margin-left: 6px;
  padding: 0;
}
.input-container.input-btn {
  height: 45px;
  margin-bottom: 0;
  margin-top: 20px;
}
.submit-btn {
  background: #222;
  color: #fcba03;
  font-weight: bold;
  border: 1px solid #222;
  padding: 0 20px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5 all ease;
  margin-bottom: 0;
  line-height: 16px;
  line-height: 28px;
  display: flex;
  text-align: center;
  height: 100%;
}
.submit-btn:hover {
  background: #333;
  color: #fefefe;
}
</style>
