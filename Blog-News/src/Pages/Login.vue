<template>
	<div class="container mt-5">
		<b-form>
			<b-form-group
				label="Tên đăng nhập"
			>
				<b-form-input
					type="email"
					placeholder="Tên đăng nhập"
				></b-form-input>
			</b-form-group>

			<b-form-group label="Mật khẩu" >
				<b-form-input
					placeholder="Mật khẩu"
					required
				></b-form-input>
			</b-form-group>
			<b-button type="submit" variant="primary">Submit</b-button>
		</b-form>
	</div>
		
		
</template>

<script>
export default {
		name:'login'
}
</script>

<style>

</style>