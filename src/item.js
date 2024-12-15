export default function newItem(item) {
  const createDiv = document.createElement("div");
  const itemHtml = (
    <div class="border-b-2 md:justify-between border-lineColor flex flex-row py-6">
      <div class="flex md:w-[45%] md:justify-between flex-col md:flex-row md:items-center w-[60%] ">
        <div class="flex flex-row gap-x-2">
          <img
            class="max-w-[7.5rem] h-auto"
            src="${item.image}"
            alt=""
            srcset=""
          />
          <div class="md:pr-6 md:flex md:flex-col md:justify-center">
            <p class="text-lightGrey text-sm md:text-base">Footwear</p>
            <p
              style="white-space:wrap;overflow:hidden;width:100%"
              class="item-description md:text-lg text-base"
            >
              ${item.name}
            </p>
          </div>
        </div>
        <p class="self-end md:self-center text-xl md:text-2xl font-bold mr-4 md:mr-0">
          ${item.price}
        </p>
      </div>
      <div class="w-[40%] md:w-[30%] flex md:flex-row-reverse md:items-center flex-col items-end justify-between">
        <p
          id="total-item-cost"
          class="text-xl md:text-2xl text-purple font-bold"
        >
          ${item.price}
        </p>
        <div class="flex flex-row gap-x-2 items-center border-y-[2px] border-lineColor">
          <button id="decrease" class="increment-btn">
            -
          </button>
          <p class="px-2">1</p>
          <button id="increase" class="increment-btn ">
            +
          </button>
        </div>
      </div>
    </div>
  );
  createDiv.innerHTML = itemHtml;
  return createDiv;
}
