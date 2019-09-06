<template>
  <div class="kontakt">
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
      <h3>kontakt</h3>
      <div class="info">
        <div class="left-aside">
          <p>Är du intresserad av att jobba med mig eller bara vill diskutera en idé? Hör av dig till mig så återkommer jag så fort jag kan!</p>
        </div>
        <div class="right-aside">
          <!-- <figure class="social-media has-text-centered">
            <li class="pv3 ph2 ma0 link grow">
              <a href="https://twitter.com/maccydrums" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']" size="3x" style="color: #38A1F3;" />
              </a>
            </li>
            <li class="pv3 ph2 ma0 link grow">
              <a href="http://www.instagram.com/marcusanderssson_" target="_blank">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  size="3x"
                  style="color: rgb(225, 52, 95);"
                />
              </a>
            </li>
            <li class="pv3 ph2 ma0 link grow">
              <a href="https://www.linkedin.com/in/marcus-andersson-78aa2316a/" target="_blank">
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  size="3x"
                  style="color: rgb(13, 117, 181);"
                />
              </a>
            </li>
            <li class="pv3 ph2 ma0 link grow">
              <a href="http://www.github.com/maccydrums" target="_blank">
                <font-awesome-icon 
                :icon="['fab', 'github']"
                size="3x" 
                style="color: white;"
                />
              </a>
            </li>
          </figure> -->
          <a class="mail" href="mailto:hej@marcuscodes.se">hej@marcuscodes.se</a>
          <p>076-118 48 57</p>
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
  name: "kontakt",
  components: {
    Footer
  }
};
</script>

<style scoped>
.kontakt {
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
.content {
  width: 100%;
  height: 25vw;
  font-size: 3vw;
  line-height: 3.8vw;
  margin-top: 25vw;
  min-height:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #19232d;
}
.content h3 {
  font-family: "hwt artz", sans-serif;
  font-size: 7vw;
  align-self: flex-start;
  margin-top: -13.5vw;
  margin-left: 5vw;
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

.info {
  margin-top: 4vw;
  width: 90vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  font-family: 'nunito', sans-serif;
  color: white;
}
.left-aside {
  flex: 1;
  /* background-color: grey; */
}
.left-aside p {
  text-align: left;
}
.right-aside {
  flex: 1;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  /* background-color: lightgreen; */
  height: 16vw;
}
.right-aside a {
  color: white;
}
.right-aside a:hover {
  color: grey;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
li a:hover {
  color: rgb(0, 0, 0);
}
li a {
  color: hsla(0, 0%, 20%, 1);
  font-size: 20px;
  /* color: rgba( 45, 55, 65, .85 );           ALTERNATIVE COLOR*/
  text-decoration: none;
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

@media screen and (max-width: 380px) {
  .right-aside {
    margin-top: 30px;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 40px;
    line-height: 35px;
  }
  .columns {
    width: 98%;
  }
  .content h3 {
    margin-top: -100px;
    font-size: 15vw;
  }
  .content {
    margin-top: 200px;
    min-height: 60vh;
  }
  .left-aside p {
    margin-top: 20px;
    font-size: 6.8vw;
    line-height: 30px;
  }
  .right-aside p, a {
    font-size: 6.8vw;
    line-height: 9vw;
  }
  .right-aside .mail a, .right-aside p {
    margin-left: 0px;
    text-align: center;
  }
  .right-aside .social-media a {
    font-size: 4vw;
  }
  .info {
    flex-direction: column;
  }
}

</style>