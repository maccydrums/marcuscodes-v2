<template>
  <div class="utveckling">
    <div class="nav">
      <router-link to="/">
        <h1>Marcus<br/>Andersson</h1>
      </router-link>
      <router-link to="/about">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </router-link>
    </div>
    <div class="content">
      <h3>utveckling</h3>
      <div class="columns is-tablet is-variable is-4 grid-xl">
      <div class="column">
        <figure class="image card">
          <img src="../assets/front.png">
        </figure>
        <h4>FRONT END DEVELOPMENT</h4>
        <p>Kommer snart.</p>
      </div>
      <div class="column">
        <figure class="image card">
          <img src="../assets/ux.jpg">
        </figure>
        <h4>UX och UI-DESIGN</h4>
        <p>Kommer snart.</p>
        <!-- <p>User experience is critical when you're developing a product for a client. </p> -->
      </div>
      <div class="column">
        <figure class="image card">
          <img src="../assets/backend.jpg">
        </figure>
        <h4>BACK END DEVELOPMENT</h4>
        <p>Kommer snart.</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "utveckling",
  components: {}
};
</script>

<style scoped>
.utveckling {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  /* margin-left: 60px; */
  font-size: 50px;
  font-family: 'hwt artz', sans-serif;
  color: black;
  text-align: left;
  line-height: 42px;
}
h4 {
  color: white;
  font-family: 'hwt artz', sans-serif;
  font-size: 3vw;
  margin-top: 20px;
}
.content {
  width: 100%;
  font-size: 2.35vw;
  margin-top: 445px;
  /* min-height:auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #19232d;
}
.content p {
  font-size: 1.8vw;
  text-align: left;
  color: white;
  font-family: 'Nunito', sans-serif;
}
.content h3 {
  font-family: "hwt artz", sans-serif;
  font-size: 7vw;
  align-self: flex-start;
  margin-top: -300px;
  margin-left: 5vw;
}
.columns {
  width: 90%;
  margin-bottom: 60px;
  
}
.column {
  flex-direction: column;
}
.column .image {
  width: 100%;
  margin: auto;
}
.image img {
  height: 100%;
}
figure {
  display: flex;
}

.nav {
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
}

#menuToggle {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}
#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #333333;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 40px;
    line-height: 35px;
  }
  .content {
    margin-top: 200px;
  }
  .columns {
    width: 98%;
    margin-top: -10vw;
  }
  .content h3 {
    font-size: 15vw;
    margin-top: -100px;
  }
  .content p {
    text-align: center;
    margin-bottom: 15px;
    font-size: 5vw;
  }
  h4 {
    font-size: 9.5vw;
    margin-bottom: 0px;
    margin-top: 10px;
  }
}

</style>