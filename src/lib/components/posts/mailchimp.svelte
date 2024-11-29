<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	let { className = '' } = $props();
</script>

<div id="mc_embed_shell">
	<div id="mc_embed_signup">
		<form
			action="https://daveyonkers.us17.list-manage.com/subscribe/post?u=6533434c6c5f6276198f7ac1f&amp;id=e3e10c1472&amp;f_id=001bbfe0f0"
			method="post"
			id="mc-embedded-subscribe-form"
			name="mc-embedded-subscribe-form"
			class="validate"
			target="_self"
		>
			<div id="mc_embed_signup_scroll" class="mt-4 flex flex-col gap-1 sm:mt-12">
				<h3 class="mb-1">Get notified when I have something to share:</h3>
				<div class="mc-field-group">
					<Input
						type="email"
						name="EMAIL"
						class="required email max-w-xs"
						id="mce-EMAIL"
						value=""
						placeholder="email"
					/>
				</div>
				<div id="mce-responses" class="clear foot">
					<div class="response" id="mce-error-response" style="display: none;"></div>
					<div class="response" id="mce-success-response" style="display: none;"></div>
				</div>
				<div aria-hidden="true" style="position: absolute; left: -5000px;">
					/* real people should not fill this in and expect good things - do not remove this or risk
					form bot signups */
					<input type="text" name="b_6533434c6c5f6276198f7ac1f_e3e10c1472" tabindex="-1" value="" />
				</div>
				<div class="optionalParent">
					<div class="clear foot">
						<Button
							type="submit"
							name="subscribe"
							id="mc-embedded-subscribe"
							class="button"
							variant="outline"
						>
							Subscribe
						</Button>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
