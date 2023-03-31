<template>
  <div class="container mx-auto" id="container_list">
    <div class="table-responsive flex flex-col justify-center align-middle">
      <img alt="Vue logo" src="../assets/logo.png" width="200" height="200">
      <table class="border-collapse table-fixed border border-green-800">
        <thead>
          <tr>
            <th class="w-1/2 border border-green-600 text-left">Title</th>
            <th class="w-1/4 border border-green-600 text-left">Author</th>
            <th class="w-1/4 border border-green-600 text-left">Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-green-600 text-left">Intro to CSS</td>
            <td class="border border-green-600 text-left">Adam</td>
            <td class="border border-green-600 text-left">858</td>
          </tr>
          <tr class="bg-emerald-200">
            <td class="border border-green-600 text-left">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
            <td class="border border-green-600 text-left">Adam</td>
            <td class="border border-green-600 text-left">112</td>
          </tr>
          <tr>
            <td class="border border-green-600 text-left">Intro to JavaScript</td>
            <td class="border border-green-600 text-left">Chris</td>
            <td class="border border-green-600 text-left">1,280</td>
          </tr>
        </tbody>
    </table>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style>
  #container_list {
  }
</style>
