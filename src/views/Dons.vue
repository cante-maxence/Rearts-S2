<template>
    <main>
        <h2>Faites un *don !</h2>
        <p>*Les dons sont envoyés à des associations partenaires.</p>

<dh-component>
<!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->

            <div role="radiogroup" class="mx-auto py-12">
                <!-- Code block starts -->
                <div class="">
                    <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div class="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                    </div>
                    <label id="label1" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">On</label>
                </div>
                <!-- Code block ends -->
                <!-- Code block starts -->
                <div class=" ml-6">
                    <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label2" type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div class="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                    </div>
                    <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Off</label>
                </div>
                <!-- Code block ends -->

            </div>
        </dh-component>

    </main>
</template>

    <style>
        .checkbox:checked {
            border: none;
        }
        .checkbox:checked + .check-icon {
            display: flex;
        }
    </style>
<script>
</script>
