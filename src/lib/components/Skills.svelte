<script lang="ts">
	interface Skill {
		name: string;
		rating: number;
	}

	const skills: Skill[] = [
		{ name: 'JAVA', rating: 90 },
		{ name: 'HTML', rating: 95 },
		{ name: 'SPRING BOOT', rating: 75 },
		{ name: 'SQL', rating: 85 },
		{ name: 'CSS', rating: 70 },
		{ name: 'HADOOP', rating: 30 }
	];
</script>

<section id="skillsSectionId" class="hero is-dark is-fullheight">
	<div class="hero-body">
		<div class="container">
			<h4 class="title is-3">Profile</h4>
			<p>
				I'm a lover of technology, video games, nature, and oxford commas. I get excited about long
				hikes and city cycling.
			</p>
			<p>
				I use my skills as a fullstack developer to create responsive webapps with secure, effecient
				backends.
			</p>
			<hr />

			<div class="columns">
				<!-- left side -->
				<div class="column is-half">
					<h5 class="title is-5 is-uppercase">My Toolkit</h5>

					<div class="content">
						<ul>
							<li>Eclipse</li>
							<li>SublimeText</li>
							<li>VS Code</li>
							<li>Unix</li>
							<li>SSMS</li>
							<li>Postman</li>
						</ul>
					</div>
				</div>

				<!-- right side -->
				<div class="column is-half">
					<h5 class="title is-5 is-uppercase">My Skills</h5>
					<ul class="skills-list">
						{#each skills as skill}
							<li class="progress-padding">
								<div>
									<div class="columns is-mobile">
										<div class="column is-half">
											<p class="is-uppercase">{skill.name}</p>
										</div>
										<div class="column is-half" style="text-align: right;">
											<p>{skill.rating}%</p>
										</div>
									</div>
								</div>
								<progress class="progress is-small is-accented" value={skill.rating} max="100"
								></progress>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.progress-padding {
		padding-bottom: 1em;
	}
</style>

