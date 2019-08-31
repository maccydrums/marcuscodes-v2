<template>
  <div class="portfolio">
    <div class="nav">
      <h1>
        Marcus
        <br />Andersson
      </h1>
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
      <h3>portfolio</h3>
      <div class="columns is-tablet is-variable is-3 grid-xl">
        <div class="column">
          <figure class="image card">
            <a href="https://github.com/maccydrums/tmaguld" target="_blank">
              <img src="../assets/TMA-Guld.png" />
            </a>
          </figure>
        </div>
        <div class="column">
          <figure class="image card">
            <img src="../assets/Porsche - tablet (kopia).png" />
          </figure>
        </div>
      </div>
      <div class="columns is-tablet is-variable is-4 grid-xl">
        <div class="column">
          <figure class="image card">
            <a href="https://github.com/0skar0/ReactProjectNHL" target="_blank">
              <img src="../assets/nhl.png" />
            </a>
          </figure>
        </div>
        <div class="column">
          <figure class="image card">
            <a href="https://www.youtube.com/watch?v=TvoXGrYouPc" target="_blank">
              <img src="../assets/ux1.png" />
            </a>
          </figure>
        </div>
      </div>
      <div class="columns is-tablet is-variable is-4 grid-xl">
        <div class="column">
          <figure class="image card">
            <a href="https://github.com/maccydrums/marcuscodes" target="_blank">
              <img src="../assets/marcuscodes.png" />
            </a>
          </figure>
        </div>
        <div class="column">
          <figure class="image card">
            <a href="https://maccydrums.github.io/currency-converter" target="_blank">
              <img src="../assets/currency-converter.png" />
            </a>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "portfolio",
  components: {}
};
</script>

<style scoped>
.portfolio {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  /* margin-left: 60px; */
  font-size: 50px;
  font-family: "hwt artz", sans-serif;
  color: black;
  text-align: left;
  line-height: 42px;
}
.content {
  width: 100vw;
  font-size: 2.35vw;
  margin-top: 35vw;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  margin-bottom: 50px;
  background-color: #19232d;

}
.content h3 {
  font-family: "hwt artz", sans-serif;
  font-size: 7vw;
  align-self: flex-start;
  margin-top: -300px;
  margin-left: 5vw;
}
.image {
  /* box-shadow: rgb(195, 195, 195) 1px 1px 8px; */
  vertical-align: middle;
}
.nav {
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
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
  }
  .columns {
    align-self: center;
  }
  .content h3 {
    font-size: 10vw;
    margin-top: -100px;
  }
}
</style>