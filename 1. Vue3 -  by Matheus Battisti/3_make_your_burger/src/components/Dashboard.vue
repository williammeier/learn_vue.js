<template>
  <div id="burger-table" class="burger-table">
    <Message :msg="msg" v-show="msg" />
    <div style="overflow-x: auto">
      <div id="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente</div>
        <div>Pão</div>
        <div>Carne</div>
        <div>Opcionais</div>
        <div>Ações</div>
      </div>
      <table id="burger-table-rows">
        <ul class="burger-table-row" v-for="burger in burgers" :key="burger.id">
          <div class="order-number">{{ burger.id }}</div>
          <div>{{ burger.nome }}</div>
          <div>{{ burger.pao }}</div>
          <div>{{ burger.carne }}</div>
          <div>
            <ul>
              <li v-for="(opcional, index) in burger.opcionais" :key="index">
                {{ opcional }}
              </li>
            </ul>
          </div>
          <div>
            <select
              name="status"
              class="status"
              @change="updateBurger($event, burger.id)"
            >
              <option
                v-for="s in status"
                :key="s.id"
                :value="s.tipo"
                :selected="burger.status == s.tipo"
              >
                {{ s.tipo }}
              </option>
            </select>
            <button class="delete-btn" @click="deleteBurger(burger.id)">
              Cancelar
            </button>
          </div>
        </ul>
      </table>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'Dashboard',
  components: {
    Message,
  },
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: [],
      msg: null,
    }
  },
  methods: {
    async getPedidos() {
      const req = await fetch('http://localhost:3000/burgers')
      const data = await req.json()
      this.burgers = data
      // resgatar os status
      this.getStatus()
    },
    async getStatus() {
      const req = await fetch('http://localhost:3000/status')
      const data = await req.json()
      this.status = data
    },
    async deleteBurger(id) {
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'DELETE',
      })
      const res = await req.json()
      // colocar mensagem de
      this.msg = `Pedido Nº ${id} removido com sucesso!`
      // limpar mensagem
      setTimeout(() => (this.msg = ''), 5000)
      this.getPedidos()
    },
    async updateBurger(event, id) {
      const option = event.target.value
      const dataJson = JSON.stringify({ status: option })
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: dataJson,
      })
      const res = await req.json()
      // colocar mensagem de
      this.msg = `Pedido Nº ${res.id} atualizado para ${res.status}!`
      // limpar mensagem
      setTimeout(() => (this.msg = ''), 5000)
    },
  },
  mounted() {
    this.getPedidos()
  },
}
</script>

<style scoped>
#burger-table {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 50vh;
}
#burger-table-heading {
  display: flex;
  flex-direction: nowrap;
}
#burger-table-rows {
  display: flex;
  flex-wrap: wrap;
}
.burger-table-row {
  display: flex;
  flex-wrap: nowrap;
}
#burger-table-heading {
  font-weight: bold;
  padding: 12px;
  border: 1px solid #ccc;
  border-bottom: 3px solid #333;
}
#burger-table-heading div,
.burger-table-row div {
  width: 19%;
  min-width: 120px;
  display: flex;
  align-items: center;
}
.burger-table-row {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-top: none;
}
#burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 5%;
  min-width: 35px;
}
.burger-table-row ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
}
.burger-table-row ul li {
  margin-right: 20px;
}
.burger-table-row ul li::before {
  content: '\2022';
  margin-right: 5px;
}
select {
  padding: 12px 6px;
  margin-right: 12px;
}
select,
.delete-btn {
  width: 100px;
  height: 40px;
}
.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 1px solid #222;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.delete-btn:hover {
  background-color: #333;
  color: #fefefe;
}
</style>
