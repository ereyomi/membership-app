<template>
    <div id="loader">
        <div class="nb-spinner"></div>
    </div>
</template>

<script>
export default {
    name: 'Loader'
}
</script>


<style>
#loader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
    /* NO BORDER SPINNER */
.nb-spinner {
  width: 40px;
  height: 40px;
  margin: 0;
  background: transparent;
  border-top: 4px solid #f87509;
  border-right: 4px solid transparent;
  border-radius: 50%;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;
}



@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


</style>