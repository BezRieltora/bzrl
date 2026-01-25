namespace $ {
	export class $bog_bzrl_baza_profile extends $giper_baza_entity.with({
		Name: $giper_baza_atom_text,
		Email: $giper_baza_atom_text,
		PhotoFile: $giper_baza_atom_link_to(() => $giper_baza_file),
		Photo: $giper_baza_atom_text,
		PhotoType: $giper_baza_atom_text,
	}) {}
}
