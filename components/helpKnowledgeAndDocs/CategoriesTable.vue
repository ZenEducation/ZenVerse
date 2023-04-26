<template>
    <div>
        <table>
          <thead has-table class="text-sm">
            <tr>
              <!-- <th v-if="checkable" /> -->
              <th class="p-0">
                  <TableCheckboxCell
                  
                     @checked="checked($event, client)"
                   />
              </th>
              <th>Title</th>
              <th>Desciption</th>
              <th>Languages</th>
              <th>Icon</th>
              <th>Slug</th>
              <th>Count</th>
            </tr>
          </thead>
          
          <tbody>
            
          </tbody>
        </table>
        <CardBox has-table class="text-center p-3">No Categories</CardBox>
    </div>
</template>

<script setup>
import TableCheckboxCell from "@/components/Tables/TableCheckboxCell.vue";
import CardBox from "@/components/Cards/CardBox.vue";
</script>
