<template>
  <div class="portfolio">
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
      <h3>portfolio</h3>
      <div class="kolumner">
        <div class="kolumn">
          <div class="image card">
            <a href="https://github.com/maccydrums/tmaguld" target="_blank">
              <img src="../assets/TMA-Guld.png" />
            </a>
          </div>
        </div>
        <div class="kolumn">
          <div class="image card">
            <img src="../assets/Porsche - tablet (kopia).png" />
          </div>
        </div>
      </div>
      <div class="kolumner">
        <div class="kolumn">
          <div class="image card">
            <a href="https://github.com/0skar0/ReactProjectNHL" target="_blank">
              <img src="../assets/nhl.png" />
            </a>
          </div>
        </div>
        <div class="kolumn">
          <div class="image card">
            <a href="https://www.youtube.com/watch?v=TvoXGrYouPc" target="_blank">
              <img src="../assets/ux1.png" />
            </a>
          </div>
        </div>
      </div>
      <div class="kolumner" style="marginBottom:50px">
        <div class="kolumn">
          <div class="image card">
            <a href="https://github.com/maccydrums/marcuscodes" target="_blank">
              <img src="../assets/marcuscodes.png" />
            </a>
          </div>
        </div>
        <div class="kolumn">
          <div class="image card">
            <a href="https://maccydrums.github.io/currency-converter" target="_blank">
              <img src="../assets/currency-converter.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

// @ is an alias to /src
export default {
  name: "portfolio",
  components: {
    Footer
  }
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
  font-size: 50px;
  font-family: 'HWTArtz';
  font-weight: normal;
	font-style: normal;
  color: black;
  text-align: left;
  line-height: 42px;
}
.content {
  width: 100%;
  font-size: 2.35vw;
  margin-top: 445px;
  min-height:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(25, 35, 46);
}
.content h3 {
  font-family: 'HWTArtz';
  font-weight: normal;
	font-style: normal;
  font-size: 7vw;
  align-self: flex-start;
  margin-top: -23.5vw;
  margin-left: 5vw;
}
.kolumner {
  width: 92%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin: 10px;
  padding: 0px;
}
.kolumn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.image {
  box-shadow: rgb(25, 35, 46) 1px 1px 8px;
  vertical-align: middle;
  width: 95%;
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
  .content h3 {
    font-size: 15vw;
    margin-top: -110px;
  }
  .content {
    margin-top: 210px;
  }
  .kolumner {
    flex-direction: column;
    width: 94%;
    margin: 0px;
    margin-top: -7vw;
  }
  .kolumn {
    margin: 0px;
  }
  .image {
    margin-bottom: 10px;
  }
}
</style>