<template>
  <div class="om">
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
      <h3>Om mig</h3>
      <div class="columns is-variable is-1 grid-xl">
        <div class="column">
          <figure class="image" style="marginTop: -25px;">
            <img src="../assets/marcus.jpg"/>
          </figure>
        </div>
        <figure class="column">
          <p class=header>Mitt namn är Marcus,</p>
          <p>
            Jag är en kreativ webbutvecklare och webbdesigner som bor
            i Växjö med fokus på att göra onlineupplevelser minnesvärda.<br/><br/>
            Jag började studera till frontendutvecklare hösten -18 och blev
            förälskad i både webbutveckling- och webbdesign ganska snabbt.
            Jag har ett år kvar på min utbildning och i höst så kommer jag att
            göra min praktik på digitalbyrån
            <a href="https://www.meetod.se/" target="_blank">Meetod</a> i Växjö.<br/><br/>
            Kolla gärna in min portfolio och hör av dig ifall du har några frågor
            eller bara vill bolla lite idéer. Och när det kommer till jobb så är
            utmaningar något jag välkomnar med öppna armar. Om du har en
            idé, skicka iväg ett mail till mig så hittar jag ett sätt att göra den
            till verklighet.
          </p>
          
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
        </figure>
      </div>
    </div>
    <div class="education">
    </div>
    <div class="kunskaper">
        <h1>Kunskap</h1>
          <div class="education-header">
            <i class="fab fa-vuejs"></i>
            <i class="fab fa-react"></i>
            <i class="fab fa-git-square"></i>
            <i class="fab fa-npm"></i>
            <i class="fab fa-node"></i>
            <i class="fab fa-js"></i>
            <i class="fab fa-digital-ocean"></i>
          </div>
          <div class="columns is-variable is-4 grid-xl">
            <figure class="column">
              <ul>
                <li>JavaScript ES6</li>
                <li>HTML5 & CSS with SEO</li>
                <li>Vue.js</li>
                <li>React.js</li>
                <li>Agile Project Methods</li>
              </ul>
            </figure>
            <figure class="column">
              <ul>
                <li>UX & UI Design</li>
                <li>Test-driven Development</li>
                <li>Databases (SQL/NoSQL)</li>
                <li>Cloud Services (Docker & Digital Ocean)</li>
              </ul>
            </figure>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "om",
  components: {}
};
</script>

<style scoped>
.om {
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
  font-size: 2.35vw;
  margin-top: 445px;
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
  margin-top: -23.5vw;
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

.columns {
  color: white;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;

}
.columns .header {
  font-family: 'hwt artz', sans-serif;
  font-size: 3.7vw;
  color: black;
  margin-top: -100px;
}
.columns p {
  font-size: 1.8vw;
  font-family: "Nunito", sans-serif;
  text-align: left;
  margin-top: -30px;
}
.columns p a {
  font-size: 1.8vw;
  color: #01b5b4;
  font-weight: 600;
}
.social-media {
  margin-bottom: 2vw;
}
.social-media ul {
  list-style-type: none;
  padding: 0;
}
.social-media li {
  display: inline-block;
  margin: 0 10px;
}
.social-media li a:hover {
  color: rgb(0, 0, 0);
}
.social-media li a {
  color: hsla(0, 0%, 20%, 1);
  font-size: 1vw;
  /* color: rgba( 45, 55, 65, .85 );           ALTERNATIVE COLOR*/
  text-decoration: none;
}
.education {
  width: 100%;
  min-height: 650px;
  background-image: url('../assets/backend.jpg');
  background-position: center -50px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
}
.kunskaper {
  width: 100%;
  background-color: #19232d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.education-header {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  margin-bottom: 30px;
}
.education-header i {
  margin: 0.8vw;
  font-size: 4vw;
  margin-top: 30px;
  color: white;
}
.kunskaper h1 {
  font-size: 5vw;
  color: white;
  text-align: center;
  margin-top: 60px;
}
.kunskaper .columns {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
}
.kunskaper .columns ul {
  list-style-type: initial;
  font-family: 'nunito', sans-serif;
  font-size: 2.9vw;
  margin-bottom: 80px;
  list-style-position: inside;
  text-align:left;
  margin-left: 4vw;
}
.kunskaper .columns ul li{
  color: white;
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

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(-45deg) translate(-2px, -2.5px);
  background: #333333;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(3) {
  transform: rotate(45deg) translate(0, 0px);
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 40px;
    line-height: 35px;
  }
  .columns {
    width: 98%;
    flex-direction: column;
    margin-top: -4vw;
  }
  .columns p, .columns p a {
    font-size: 5vw;
  }
  .social-media a {
    font-size: 12px;
  }
  .image {
    margin-bottom: 70px;
  }
  .content .header {
    font-size: 9vw;
    color: white;
  }
  .content {
    margin-top: 200px;
    width: 100vw;
  }
  .content h3 {
    font-size: 15vw;
    margin-top: -100px;
  }
  .social-media {
    margin-bottom: 20px;
  }
  .kunskaper h1 {
    font-size: 12vw;
  }
  .education-header i {
    font-size: 10vw;
    margin: 1.2vw;
    margin-top: 30px;
  }
  .kunskaper .columns {
    flex-direction: column;
    align-self: center;
  }
  .kunskaper .columns ul {
    margin-left: 0px;
    line-height: 35px;
  }
  .kunskaper .columns ul li{
    font-size: 6vw;
  }
}
</style>