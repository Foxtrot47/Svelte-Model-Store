<script lang="ts">
	import type { PageData } from './$types';
	import { _ } from "svelte-i18n";
	export let data: PageData;

	const productInfo = data.productInfo;
	const productPrice = data.productPrice;
	const Images = data.images;
	let actualPrice = 0.0;
	if (productPrice != null)
		actualPrice =
			productPrice.BasePrice - (productPrice.BasePrice * productPrice.BaseDiscountPercentage) / 100;
			
	let currentShowCaseImage: HTMLImageElement;
	let currentFocussedImageID = 1;

	const changeShowcaseImage = (element: PointerEvent) => {
		const imagElement = <HTMLImageElement>element.target;
		currentFocussedImageID = Number(imagElement.id.match(/\d/));
		currentShowCaseImage.src = imagElement.src;
	};

	const productHighlights = data.productHighlights;
</script>

<div class="bg-gray-100 h-full">
	{#if productInfo != null}
		<div class="flex flex-col gap-y-4">
			<div class="flex flex-row gap-x-6 justify-center p-4 bg-white">
				<div class="flex-none flex flex-row gap-x-1 sticky top-0 self-start h-auto">
					<div class="flex flex-col gap-y-1">
						{#if Array.isArray(Images)}
							{#each Images as image}
								<button
									id="thumbnail-parent-{image.ProductImageID}"
									class="border object-cover"
									class:border-blue-400="{image.ProductImageID == currentFocussedImageID}"
									on:click={(event) => {
										event != null && changeShowcaseImage(event);
									}}
								>
									<img
										id="product-image-{image.ProductImageID}"
										class="max-h-12"
										src={image.ImageUrl}
										alt="product-img-{image.ProductImageID}"
									/>
								</button>
							{/each}
						{/if}
					</div>
					<div class="flex flex-col gap-y-2">
						<div class="flex justify-center min-w-full border border-gray-300">
							{#if Images != null}
								<img
									id="product-showcase-image"
									alt="product"
									class="max-h-96"
									src="{Images[0].ImageUrl}"
									bind:this={currentShowCaseImage}
								/>
							{/if}
						</div>

						<div class="flex flex-row flex-none justify-between gap-x-2">
							<button
								class="text-xl text-white flex gap-x-2"
								style="background-color: #ff9f00; padding: 18px 60px 18px 60px"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
									/>
								</svg>
								Add to Cart
							</button>
							<button
								class="text-xl text-white flex gap-x-2"
								style="background-color: #fb641b; padding: 18px 70px 18px 69px"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
									/>
								</svg>
								Buy Now
							</button>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-y-4">
					<div class="flex flex-row gap-x-2 text-gray-500">
						<p>Home</p>
						&gt;
						<p>Category Name</p>
						&gt;
						<p>Sub Category Name</p>
						&gt;
						<p class="truncate w-56">{productInfo.ProductName}</p>
					</div>
					<div class="font-product-sans text-2xl">
						{productInfo.DisplayName}
					</div>
					<div>
						<span class="text-3xl font-semibold">
							$ {actualPrice}
						</span>
						<span class="text-sm text-gray-400 line-through">
							{#if productPrice != null}
								$ {productPrice.BasePrice}
							{/if}
						</span>
						<span class="text-lg font-semibold text-green-700">
							{#if productPrice != null}
								{productPrice.BaseDiscountPercentage}% off
							{/if}
						</span>
					</div>
					<div class="flex flex-col md:flex-row gap-4">
						<div id="div-highlights" class="flex flex-row gap-x-9">
							<div>{$_('product-page.highlights-text')}</div>
							<ul class="space-y-2 list-disc text-gray-700">
								{#if productHighlights != null}
								{#each productHighlights as productHighlight }
									<li class="space-x-2">
										<span>{productHighlight["productproperty_localizations.PropertyName"]}:</span>
										<span>{productHighlight["productpropertyvalue_localizations.ProductPropertyValue"]}</span>
									</li>
								{/each}
								{/if}
							</ul>
						</div>
					</div>
					<div class="flex flex-row gap-x-4">
						<div>{$_("product-page.description-text")}</div>
						<div>{productInfo.ShortDescription}</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>