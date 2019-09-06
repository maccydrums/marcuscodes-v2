<template>
  <div class="wrapper">
    <span>
      <a href="https://twitter.com/maccydrums" target="_blank">
        <i class="fab fa-twitter" style="color: #38A1F3;"></i>
      </a>
      <a href="http://www.instagram.com/marcusanderssson_" target="_blank">
        <i class="fab fa-instagram" style="color: rgb(225, 52, 95);"></i>
      </a>
      <a href="https://www.linkedin.com/in/marcus-andersson-78aa2316a/" target="_blank">
        <i class="fab fa-linkedin" style="color: rgb(13, 117, 181);"></i>
      </a>
      <a href="http://www.github.com/maccydrums" target="_blank">
        <i class="fab fa-github-square" style="color: white;"></i>
      </a>
    </span>
    <h3>© 2019 Marcus Andersson</h3>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .wrapper {
    height: 80px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-family: 'nunito', sans-serif;
    background-color: #19232d;
    color: white;
    margin-top: -1.9vw;
  }
  span {
    display: flex;
    flex-direction: row;
  }
  span a i {
    margin: 0px 0.3vw 0px 0.3vw;
    font-size: 2vw;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    margin-top: 5px;
    font-size: 18px;
  }
  @media screen and (max-width: 500px) {
    .wrapper {
      margin-top: -8vw;
    }
    span a i {
      font-size: 6vw;
      margin: 0px 1vw 0px 1vw;
    }
    h3 {
      font-size: 5vw;
    }
  } 
</style>