const wins = [
  {
    us: "445_prompt_78-layout_8.png",
    opponent: "445_002_ilic_dolly_Tech_QA_job_listing_Instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "889_prompt_158-layout_8.png",
    opponent:
      "889_002_layered_base_Design_an_instagram_post_template_for_a_Harbolnas_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "951_prompt_3-layout_2.png",
    opponent: "951_prompt_3_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1002_prompt_148-layout_1.png",
    opponent:
      "1002_003_layered_mse_design_class_can_we_create_a_4th_of_july_instagram_post.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "968_prompt_132-layout_7.png",
    opponent: "968_prompt133design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "948_prompt_123-layout_4.png",
    opponent:
      "948_001_layered_exp_decay_design_class_1_Instagram_post_showcasing_the_current_medal_tally_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1010_prompt_152-layout_0.png",
    opponent:
      "1010_003_layered_exp_decay_design_class_1_Summer_yoga_retreat_beach_Instagram_post.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "959_prompt_70-layout_0.png",
    opponent:
      "959_001_ilic_dolly_Instagram_post_showcasing_the_benefits_of_gender_diversity_in_the_workplace.png",
    model: "ilic_dolly",
  },
  {
    us: "858_prompt_111-layout_0.png",
    opponent:
      "858_v0_q111_r1_thumbnails_2024-07-31_dg-fe31ea78-2395-4e09-a8ea-9bcd32d9e2a0_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1000_prompt_10-layout_6.png",
    opponent:
      "1000_003_layered_base_Create_an_Instagram_post_congratulating_a_specific.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "987_prompt_157-layout_3.png",
    opponent:
      "987_001_ilic_dolly_instagram_post_video_for_communication_skill_and_self_developement.png",
    model: "ilic_dolly",
  },
  {
    us: "18_prompt_22-layout_5.png",
    opponent: "18_prompt23design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1078_prompt_96-layout_2.png",
    opponent:
      "1078_004_layered_exp_decay_design_class_1_World_menopause_day_instagram_post_raising_awarene.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1447_prompt_124-layout_6.png",
    opponent:
      "1447_004_layered_base_instagram_post_highlighting_our_number_one_achivem.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1892_prompt_11-layout_7.png",
    opponent:
      "1892_002_layered_exp_decay_design_class_1_instagram_post_for_selling_digital_marketing_cours.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1649_prompt_41-layout_10.png",
    opponent:
      "1649_003_layered_mse_design_class_Create_a_Under_Contract_instagram_post_298_West_Va.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "830_prompt_164-layout_10.png",
    opponent:
      "830_v0_q164_r0_thumbnails_2024-07-31_dg-6e6c9566-af81-48c1-a025-539f56d63c1c_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1864_prompt_199-layout_10.png",
    opponent:
      "1864_001_layered_exp_decay_design_class_1_create_an_instagram_post_recruiting_fosters_for_a_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "491_prompt_3-layout_2.png",
    opponent:
      "491_004_ilic_dolly_leadership_development_workshop_instagram_post_in_corporate_colors.png",
    model: "ilic_dolly",
  },
  {
    us: "914_prompt_94-layout_0.png",
    opponent: "914_prompt95design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1009_prompt_142-layout_0.png",
    opponent:
      "1009_001_layered_base_cream_and_brown_illustrative_simple_tips_to_be_suc.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "634_prompt_46-layout_6.png",
    opponent:
      "634_004_ilic_dolly_instagram_post_photo_sharing_a_childrens_book_to_everyone.png",
    model: "ilic_dolly",
  },
  {
    us: "1965_prompt_172-layout_9.png",
    opponent:
      "1965_002_layered_exp_decay_design_class_1_sales_funnel_infographics_template_for_instagram_p.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1087_prompt_149-layout_1.png",
    opponent: "1087_prompt_149_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "915_prompt_198-layout_5.png",
    opponent:
      "915_003_layered_mse_design_class_fathers_day_for_restaurant_template_instagram_post.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "512_prompt_156-layout_3.png",
    opponent:
      "512_003_ilic_dolly_instagram_post_for_advertising_invitation_cards_desginer.png",
    model: "ilic_dolly",
  },
  {
    us: "1100_prompt_102-layout_7.png",
    opponent: "1100_prompt103design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1017_prompt_13-layout_7.png",
    opponent:
      "1017_004_layered_exp_decay_design_class_1_Instagram_post_announcing_an_International_Womens_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1914_prompt_43-layout_8.png",
    opponent:
      "1914_002_layered_exp_decay_design_class_1_Create_an_instagram_post_of_a_vision_board_in_a_jo.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "911_prompt_89-layout_9.png",
    opponent:
      "911_003_ilic_dolly_design_an_instagram_post_to_promote_my_custom_designed_party_favors_teal_and_orange.png",
    model: "ilic_dolly",
  },
  {
    us: "1019_prompt_80-layout_4.png",
    opponent:
      "1019_001_layered_exp_decay_design_class_1_Design_an_Instagram_post_featuring_a_diverse_group.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1107_prompt_9-layout_5.png",
    opponent: "1107_prompt10design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1040_prompt_174-layout_4.png",
    opponent: "1040_prompt_174_3.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1346_prompt_169-layout_1.png",
    opponent:
      "1346_002_layered_base_Instagram_post_promoting_a_Love_Yourself_workshop_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "941_prompt_147-layout_1.png",
    opponent: "941_prompt148design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1823_prompt_120-layout_6.png",
    opponent:
      "1823_002_layered_exp_decay_design_class_1_blue_and_purple_retro_illustrative_Instagram_post_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1523_prompt_102-layout_4.png",
    opponent:
      "1523_004_layered_base_instagram_post_to_announce_a_bubble_tea_and_collag.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "741_prompt_2-layout_10.png",
    opponent:
      "741_v0_q2_r0_thumbnails_2024-07-31_dg-48dae5f7-8375-40f1-994f-cf1371ecd05c_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "996_prompt_119-layout_5.png",
    opponent: "996_prompt_119_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "942_prompt_115-layout_7.png",
    opponent:
      "942_002_layered_exp_decay_design_class_1_Instagram_post_featuring_inspiring_quotes_from_bot.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1354_prompt_26-layout_0.png",
    opponent:
      "1354_003_layered_base_farmers_market_looking_for_new_vendor_instagram_po.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1426_prompt_144-layout_3.png",
    opponent:
      "1426_003_layered_base_Ecofriendly_product_testimonial_minimal_Instagram_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1165_prompt_199-layout_10.png",
    opponent: "1165_prompt_199_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1781_prompt_43-layout_5.png",
    opponent:
      "1781_003_layered_exp_decay_design_class_1_Create_an_instagram_post_of_a_vision_board_in_a_jo.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "929_prompt_85-layout_0.png",
    opponent: "929_prompt86design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1533_prompt_140-layout_2.png",
    opponent:
      "1533_004_layered_base_happy_4th_of_july_blue_and_red_minimalist_instagra.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1070_prompt_52-layout_6.png",
    opponent:
      "1070_v0_q52_r2_thumbnails_2024-07-31_dg-43d690b2-d475-4f06-9af6-30009fcd0742_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "522_prompt_175-layout_6.png",
    opponent:
      "522_002_ilic_dolly_Can_we_create_a_summer_camp_instagram_post_for_athletes.png",
    model: "ilic_dolly",
  },
  {
    us: "907_prompt_24-layout_3.png",
    opponent: "907_prompt_24_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1500_prompt_22-layout_4.png",
    opponent:
      "1500_001_layered_base_Create_an_Instagram_post_highlighting_a_specific_P.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1683_prompt_134-layout_3.png",
    opponent:
      "1683_003_layered_mse_design_class_Design_an_Instagram_post_promoting_a_Galentines_Da.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1038_prompt_40-layout_5.png",
    opponent:
      "1038_004_layered_base_Instagram_post_celebrating_my_friend_group_with_a_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "970_prompt_39-layout_1.png",
    opponent:
      "970_003_ilic_dolly_can_we_create_a_post_for_a_farmers_market.png",
    model: "ilic_dolly",
  },
  {
    us: "1074_prompt_17-layout_8.png",
    opponent:
      "1074_002_layered_exp_decay_design_class_1_Create_a_visually_appealing_Instagram_post_explain.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "932_prompt_109-layout_0.png",
    opponent:
      "932_004_layered_exp_decay_design_class_1_Create_an_instagram_post_about_giving_Tuesday_for_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1541_prompt_3-layout_3.png",
    opponent:
      "1541_003_layered_base_leadership_development_workshop_instagram_post_in_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "906_prompt_58-layout_0.png",
    opponent:
      "906_002_ilic_dolly_top_5_restaurant_recommendations_for_Mothers_Day_brunch_in_my_city_instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "950_prompt_175-layout_9.png",
    opponent:
      "950_v0_q175_r3_thumbnails_2024-07-31_dg-7afa9cd3-463a-4990-97c9-dc3990aeb990_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1855_prompt_23-layout_9.png",
    opponent:
      "1855_004_layered_exp_decay_design_class_1_Create_an_Instagram_post_promoting_a_webinar_on_Cr.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1372_prompt_29-layout_10.png",
    opponent:
      "1372_004_layered_base_create_an_instagram_post_with_the_headline_The_obe.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "454_prompt_153-layout_2.png",
    opponent:
      "454_002_ilic_dolly_Create_an_instagram_post_of_friends_smiling_and_laughing_with_drinks_at_a_bar_The_copy_should_say_Bears_Bar_Now_Open_fun_vibes.png",
    model: "ilic_dolly",
  },
  {
    us: "1073_prompt_142-layout_6.png",
    opponent: "1073_prompt143design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "644_prompt_109-layout_5.png",
    opponent:
      "644_003_ilic_dolly_Create_an_instagram_post_about_giving_Tuesday_for_a_dog_rescue.png",
    model: "ilic_dolly",
  },
  {
    us: "1918_prompt_6-layout_2.png",
    opponent:
      "1918_002_layered_exp_decay_design_class_1_design_me_an_instagram_post_for_online_physio_free.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "962_prompt_58-layout_6.png",
    opponent:
      "962_001_ilic_dolly_top_5_restaurant_recommendations_for_Mothers_Day_brunch_in_my_city_instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "1403_prompt_67-layout_10.png",
    opponent:
      "1403_002_layered_base_White_Blue_and_yellow_Char_Dham_Yatra_travel_agenc.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1097_prompt_22-layout_4.png",
    opponent:
      "1097_001_layered_exp_decay_design_class_1_Create_an_Instagram_post_highlighting_a_specific_P.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "361_prompt_180-layout_1.png",
    opponent: "361_prompt181design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1956_prompt_98-layout_0.png",
    opponent:
      "1956_001_layered_exp_decay_design_class_1_Design_an_Instagram_post_featuring_God_Save_the_Qu.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1616_prompt_121-layout_1.png",
    opponent:
      "1616_001_layered_mse_design_class_Create_an_instagram_post_about_dogs_being_mans_bes.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "449_prompt_20-layout_3.png",
    opponent:
      "449_004_ilic_dolly_Design_an_Instagram_post_with_a_quiz_format_to_educate_followers_about_LGBTQ_rights_and_history.png",
    model: "ilic_dolly",
  },
  {
    us: "1013_prompt_139-layout_0.png",
    opponent:
      "1013_004_layered_exp_decay_design_class_1_Charity_run_colorful_graphics_Instagram_post.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "412_prompt_174-layout_0.png",
    opponent: "412_prompt175design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "250_prompt_48-layout_9.png",
    opponent: "250_prompt49design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1041_prompt_43-layout_9.png",
    opponent: "1041_prompt44design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1007_prompt_38-layout_0.png",
    opponent:
      "1007_002_layered_exp_decay_design_class_1_podcast_guest_announcement_instagram_post_with_pro.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1058_prompt_114-layout_4.png",
    opponent:
      "1058_v0_q114_r0_thumbnails_2024-07-31_dg-95a61b01-cf97-4854-8114-d4ebe92e25f9_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "997_prompt_106-layout_7.png",
    opponent:
      "997_001_layered_mse_design_class_design_a_facebook_post_to_recruit_fosters_for_a_sm.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1094_prompt_177-layout_8.png",
    opponent:
      "1094_003_ilic_dolly_Id_like_to_create_an_instagram_post_thats_bright_and_fun_about_balanced_nutrition.png",
    model: "ilic_dolly",
  },
  {
    us: "1536_prompt_31-layout_3.png",
    opponent:
      "1536_004_layered_base_a_heartfelt_Mothers_Day_greeting_instagram_post_wi.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1824_prompt_35-layout_5.png",
    opponent:
      "1824_002_layered_exp_decay_design_class_1_educational_Instagram_post_explaining_the_signific.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1149_prompt_10-layout_2.png",
    opponent: "1149_prompt_10_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1089_prompt_90-layout_10.png",
    opponent: "1089_prompt91design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "852_prompt_8-layout_9.png",
    opponent:
      "852_v0_q8_r0_thumbnails_2024-07-31_dg-11958ffd-44a7-4acf-b441-97abb202422e_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1886_prompt_97-layout_7.png",
    opponent:
      "1886_001_layered_exp_decay_design_class_1_Instagram_post_announcing_a_Mothers_Day_spa_packag.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "343_prompt_113-layout_1.png",
    opponent: "343_prompt114design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1957_prompt_159-layout_4.png",
    opponent:
      "1957_003_layered_exp_decay_design_class_1_elegant_high_ticket_international_law_instagram_po.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1502_prompt_165-layout_4.png",
    opponent:
      "1502_002_layered_base_Create_an_instagram_template_with_a_fantasy_hell_f.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1053_prompt_131-layout_1.png",
    opponent:
      "1053_v0_q131_r0_thumbnails_2024-07-31_dg-84fe0ee4-c445-4247-b06b-715d53bb778c_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1633_prompt_83-layout_5.png",
    opponent:
      "1633_004_layered_mse_design_class_templatefor_instagram_post_with_ramadan_theme.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1691_prompt_25-layout_0.png",
    opponent:
      "1691_002_layered_mse_design_class_Make_me_an_instagram_post_with_an_image_of_a_direc.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1042_prompt_51-layout_9.png",
    opponent: "1042_prompt52design3.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1869_prompt_164-layout_0.png",
    opponent:
      "1869_003_layered_exp_decay_design_class_1_Can_you_design_a_post_for_my_instagram_page_where_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "521_prompt_194-layout_2.png",
    opponent:
      "521_002_ilic_dolly_Create_an_instagram_post_State_Compliance_In_what_ways_should_federal_agencies_be_required_to_respect_state_laws_and_businesses_that_comply_with_the.png",
    model: "ilic_dolly",
  },
  {
    us: "1606_prompt_56-layout_9.png",
    opponent:
      "1606_001_layered_mse_design_class_Create_an_Instagram_post_explaining_the_history_an.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1003_prompt_63-layout_10.png",
    opponent: "1003_prompt64design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "590_prompt_135-layout_10.png",
    opponent:
      "590_004_ilic_dolly_Create_an_instagram_post_template_for_a_planner_and_journal_business_with_geometric_sansserif_fonts.png",
    model: "ilic_dolly",
  },
  {
    us: "1501_prompt_71-layout_2.png",
    opponent:
      "1501_001_layered_base_Create_instagram_post_calling_for_support_for_peop.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "562_prompt_133-layout_9.png",
    opponent:
      "562_003_ilic_dolly_laptop_product_launch_templates_for_instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "340_prompt_14-layout_9.png",
    opponent: "340_prompt15design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "945_prompt_68-layout_9.png",
    opponent: "945_prompt_68_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1357_prompt_129-layout_10.png",
    opponent:
      "1357_002_layered_base_I_would_like_to_create_post_about_the_importance_o.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1871_prompt_70-layout_0.png",
    opponent:
      "1871_002_layered_exp_decay_design_class_1_Instagram_post_showcasing_the_benefits_of_gender_d.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1109_prompt_174-layout_7.png",
    opponent: "1109_prompt_174_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "245_prompt_21-layout_6.png",
    opponent: "245_prompt22design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1562_prompt_85-layout_3.png",
    opponent:
      "1562_001_layered_mse_design_class_Make_me_a_post_to_reveal_raffle_prizes_themed_arou.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "977_prompt_149-layout_7.png",
    opponent: "977_prompt150design2.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1835_prompt_7-layout_0.png",
    opponent:
      "1835_001_layered_exp_decay_design_class_1_Make_an_instagram_post_showcasing_the_best_Victori.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "944_prompt_46-layout_9.png",
    opponent: "944_prompt_46_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "971_prompt_19-layout_10.png",
    opponent: "971_prompt_19_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "106_prompt_130-layout_1.png",
    opponent: "106_prompt131design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1031_prompt_39-layout_5.png",
    opponent:
      "1031_002_ilic_dolly_can_we_create_a_post_for_a_farmers_market.png",
    model: "ilic_dolly",
  },
  {
    us: "1188_prompt_175-layout_6.png",
    opponent: "1188_prompt_175_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "818_prompt_105-layout_6.png",
    opponent:
      "818_v0_q105_r1_thumbnails_2024-07-31_dg-b245a929-072c-4317-81c8-12a7f3ed9b08_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1576_prompt_156-layout_9.png",
    opponent:
      "1576_001_layered_mse_design_class_instagram_post_for_advertising_invitation_cards_de.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1069_prompt_8-layout_0.png",
    opponent:
      "1069_004_layered_exp_decay_design_class_1_Pottery_studio_creations_earthy_Instagram_post.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "961_prompt_62-layout_6.png",
    opponent:
      "961_002_layered_base_Make_ma_an_isntagram_post_advertising_a_new_yoga_i.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1061_prompt_146-layout_0.png",
    opponent: "1061_prompt147design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "956_prompt_167-layout_7.png",
    opponent: "956_prompt_167_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "930_prompt_57-layout_1.png",
    opponent: "930_004_ilic_dolly_Hospitality_job_listing_Instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "904_prompt_94-layout_10.png",
    opponent:
      "904_v0_q94_r1_thumbnails_2024-07-31_dg-a5cd1210-aa93-4cee-94bf-156cca4315a2_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "423_prompt_44-layout_9.png",
    opponent: "423_prompt45design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1051_prompt_77-layout_0.png",
    opponent:
      "1051_004_layered_mse_design_class_I_am_creating_an_instagram_post_for_my_company_and.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1022_prompt_54-layout_6.png",
    opponent:
      "1022_004_layered_mse_design_class_blue__yellow_Technical_marketing_agency_instagram_.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "396_prompt_111-layout_4.png",
    opponent: "396_prompt112design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "517_prompt_32-layout_4.png",
    opponent:
      "517_004_ilic_dolly_Instagram_post_announcing_a_watch_party_for_a_major_Olympic_event.png",
    model: "ilic_dolly",
  },
  {
    us: "946_prompt_44-layout_4.png",
    opponent:
      "946_001_layered_base_Create_a_post_to_promote_Melaleuca_the_Wellness_co.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "534_prompt_165-layout_9.png",
    opponent:
      "534_004_ilic_dolly_Create_an_instagram_template_with_a_fantasy_hell_feeling_inspired_by_dia_de_los_muertos.png",
    model: "ilic_dolly",
  },
  {
    us: "1817_prompt_196-layout_6.png",
    opponent:
      "1817_003_layered_exp_decay_design_class_1_Please_create_a_instagram_post_with_plenty_of_ques.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "966_prompt_159-layout_9.png",
    opponent:
      "966_002_layered_exp_decay_design_class_1_elegant_high_ticket_international_law_instagram_po.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1043_prompt_199-layout_8.png",
    opponent:
      "1043_002_layered_mse_design_class_create_an_instagram_post_recruiting_fosters_for_a_.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "901_prompt_146-layout_9.png",
    opponent:
      "901_001_layered_mse_design_class_Black_and_beige_minimalistic_simple_instagram_post.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1937_prompt_152-layout_10.png",
    opponent:
      "1937_002_layered_exp_decay_design_class_1_Summer_yoga_retreat_beach_Instagram_post.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1742_prompt_154-layout_2.png",
    opponent:
      "1742_002_layered_mse_design_class_Make_an_Instagram_post_announcing_your_companys_do.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "339_prompt_69-layout_1.png",
    opponent: "339_prompt70design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "985_prompt_21-layout_2.png",
    opponent:
      "985_004_layered_mse_design_class_Give_me_an_instagram_template_to_promote_a_discoun.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "954_prompt_112-layout_2.png",
    opponent:
      "954_003_layered_base_Minimalist_background_for_quotes_forinstagram_post.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "975_prompt_44-layout_1.png",
    opponent:
      "975_004_ilic_dolly_Create_a_post_to_promote_Melaleuca_the_Wellness_company.png",
    model: "ilic_dolly",
  },
  {
    us: "1723_prompt_145-layout_10.png",
    opponent:
      "1723_003_layered_mse_design_class_instagram_post_announcing_Park_Bank_as_returning_s.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1174_prompt_114-layout_6.png",
    opponent: "1174_prompt_114_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1030_prompt_69-layout_9.png",
    opponent:
      "1030_001_layered_base_design_instagram_post_my_physio_told_me_the_pain_i.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "983_prompt_125-layout_4.png",
    opponent: "983_prompt126design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1103_prompt_76-layout_2.png",
    opponent:
      "1103_001_layered_base_Can_you_make_an_instagram_post_featuring_a_tenminu.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "921_prompt_192-layout_0.png",
    opponent:
      "921_001_ilic_dolly_Bright_and_lively_instagram_post_free_cofee_at_laundromat_show_happy_customers.png",
    model: "ilic_dolly",
  },
  {
    us: "1311_prompt_104-layout_2.png",
    opponent: "1311_prompt_104_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1925_prompt_50-layout_6.png",
    opponent:
      "1925_004_layered_exp_decay_design_class_1_create_an_engaging_instagram_post_on_world_yoga_da.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "618_prompt_155-layout_2.png",
    opponent:
      "618_001_ilic_dolly_Design_a_heartwarming_Instagram_post_showcasing_the_impact_of_donations_for_Giving_Tuesday.png",
    model: "ilic_dolly",
  },
  {
    us: "943_prompt_196-layout_6.png",
    opponent:
      "943_002_layered_mse_design_class_Please_create_a_instagram_post_with_plenty_of_ques.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1388_prompt_109-layout_9.png",
    opponent:
      "1388_003_layered_base_Create_an_instagram_post_about_giving_Tuesday_for_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "768_prompt_150-layout_9.png",
    opponent:
      "768_v0_q150_r1_thumbnails_2024-07-31_dg-2ea2dca1-82f5-41c1-87b9-dd585c56ccb9_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "993_prompt_199-layout_10.png",
    opponent:
      "993_001_layered_exp_decay_design_class_1_create_an_instagram_post_recruiting_fosters_for_a_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1751_prompt_5-layout_10.png",
    opponent:
      "1751_002_layered_mse_design_class_an_instagram_post_finance_Early_Career_Credit_Anal.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1779_prompt_15-layout_10.png",
    opponent:
      "1779_004_layered_exp_decay_design_class_1_an_instagram_post_for_my_inclusive_personal_traini.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "900_prompt_148-layout_6.png",
    opponent:
      "900_003_layered_exp_decay_design_class_1_can_we_create_a_4th_of_july_instagram_post.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1476_prompt_155-layout_9.png",
    opponent:
      "1476_001_layered_base_Design_a_heartwarming_Instagram_post_showcasing_th.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1075_prompt_65-layout_7.png",
    opponent:
      "1075_001_layered_mse_design_class_Create_a_square_instagram_post_of_an_image_of_a_br.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "924_prompt_117-layout_7.png",
    opponent:
      "924_001_ilic_dolly_templates_for_business_celebrations_for_instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "1635_prompt_158-layout_6.png",
    opponent:
      "1635_004_layered_mse_design_class_Design_an_instagram_post_template_for_a_Harbolnas_.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1572_prompt_139-layout_0.png",
    opponent:
      "1572_002_layered_mse_design_class_Charity_run_colorful_graphics_Instagram_post.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1409_prompt_189-layout_3.png",
    opponent:
      "1409_001_layered_base_help_me_design_an_Instagram_post_for_handmade_wood.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1680_prompt_142-layout_6.png",
    opponent:
      "1680_001_layered_mse_design_class_cream_and_brown_illustrative_simple_tips_to_be_suc.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "803_prompt_65-layout_9.png",
    opponent:
      "803_v0_q65_r2_thumbnails_2024-07-31_dg-4ffa8cec-5625-4af0-acd1-cdcc2466cb22_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1924_prompt_197-layout_1.png",
    opponent:
      "1924_004_layered_exp_decay_design_class_1_create_an_instagram_post_explaining_the_importance.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1066_prompt_9-layout_6.png",
    opponent: "1066_prompt10design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1018_prompt_113-layout_1.png",
    opponent:
      "1018_003_layered_exp_decay_design_class_1_instagram_post_event_water_meet_and_greet_date_tim.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "281_prompt_60-layout_1.png",
    opponent: "281_prompt61design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1054_prompt_73-layout_0.png",
    opponent:
      "1054_003_layered_base_instagram_post_for_a_medical_center_providing_free.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "487_prompt_168-layout_8.png",
    opponent:
      "487_002_ilic_dolly_Favorite_smoothie_recipe_colorful_Instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "39_prompt_2-layout_7.png",
    opponent: "39_prompt3design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1063_prompt_162-layout_4.png",
    opponent:
      "1063_002_ilic_dolly_5_photo_collage_with_shades_of_purple_instagram_posts.png",
    model: "ilic_dolly",
  },
  {
    us: "1612_prompt_76-layout_0.png",
    opponent:
      "1612_002_layered_mse_design_class_Can_you_make_an_instagram_post_featuring_a_tenminu.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1944_prompt_23-layout_2.png",
    opponent:
      "1944_001_layered_exp_decay_design_class_1_Create_an_Instagram_post_promoting_a_webinar_on_Cr.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1814_prompt_116-layout_0.png",
    opponent:
      "1814_001_layered_exp_decay_design_class_1_Weekend_farmers_market_fresh_produce_Instagram_pos.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "999_prompt_31-layout_6.png",
    opponent:
      "999_001_layered_mse_design_class_a_heartfelt_Mothers_Day_greeting_instagram_post_wi.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1589_prompt_68-layout_9.png",
    opponent:
      "1589_002_layered_mse_design_class_Design_an_Instagram_post_featuring_your_handcrafte.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "965_prompt_64-layout_2.png",
    opponent:
      "965_004_layered_base_Happy_birthday_instagram_post_for_my_freind_Andie_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1039_prompt_125-layout_8.png",
    opponent:
      "1039_002_layered_exp_decay_design_class_1_orange_green_brown_realistic_wildlife_birthday_inv.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "963_prompt_179-layout_8.png",
    opponent: "963_prompt_179_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1695_prompt_104-layout_2.png",
    opponent:
      "1695_001_layered_mse_design_class_Mothers_Day_selfcare_gift_guide_with_products_avai.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1099_prompt_89-layout_5.png",
    opponent:
      "1099_002_layered_exp_decay_design_class_1_design_an_instagram_post_to_promote_my_custom_desi.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1037_prompt_193-layout_1.png",
    opponent:
      "1037_001_ilic_dolly_Create_a_real_estate_post_about_how_sellers_would_want_to_list_their_house_with_The_Vermont_Sales_Group_Stratton_Mountain_VT.png",
    model: "ilic_dolly",
  },
  {
    us: "891_prompt_18-layout_6.png",
    opponent:
      "891_002_ilic_dolly_create_a_instagram_post_bright_30_off_for_product_starshaped_callout.png",
    model: "ilic_dolly",
  },
  {
    us: "922_prompt_2-layout_10.png",
    opponent: "922_prompt_2_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "986_prompt_117-layout_1.png",
    opponent:
      "986_002_layered_base_templates_for_business_celebrations_for_instagram_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1102_prompt_151-layout_1.png",
    opponent:
      "1102_003_layered_mse_design_class_Make_an_Instagram_post_featuring_a_series_of_quote.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1721_prompt_127-layout_6.png",
    opponent:
      "1721_003_layered_mse_design_class_promoting_a_new_Lacquer_ofnail_polish_collection_i.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1621_prompt_10-layout_9.png",
    opponent:
      "1621_002_layered_mse_design_class_Create_an_Instagram_post_congratulating_a_specific.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1032_prompt_97-layout_0.png",
    opponent:
      "1032_002_layered_base_Instagram_post_announcing_a_Mothers_Day_spa_packag.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "903_prompt_4-layout_9.png",
    opponent:
      "903_004_ilic_dolly_instagram_post_explaining_how_our_business_supports_LGBTQ_love_and_relationships_yearround.png",
    model: "ilic_dolly",
  },
  {
    us: "912_prompt_96-layout_8.png",
    opponent:
      "912_001_layered_exp_decay_design_class_1_World_menopause_day_instagram_post_raising_awarene.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1023_prompt_129-layout_10.png",
    opponent:
      "1023_001_ilic_dolly_I_would_like_to_create_post_about_the_importance_of_selfcare_to_post_to_instagram.png",
    model: "ilic_dolly",
  },
  {
    us: "1106_prompt_75-layout_9.png",
    opponent: "1106_prompt76design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "935_prompt_68-layout_1.png",
    opponent:
      "935_002_ilic_dolly_Design_an_Instagram_post_featuring_your_handcrafted_jewelry_Mothers_Day_collection_with_closeup_images_of_unique_pieces.png",
    model: "ilic_dolly",
  },
  {
    us: "1653_prompt_66-layout_2.png",
    opponent:
      "1653_003_layered_mse_design_class_Instagram_post_celebrating_a_Woman_of_the_Year_in_.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1036_prompt_163-layout_7.png",
    opponent:
      "1036_004_layered_mse_design_class_create_instagram_post__Elevate_Physiotherapy_are_p.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1922_prompt_177-layout_5.png",
    opponent:
      "1922_001_layered_exp_decay_design_class_1_Id_like_to_create_an_instagram_post_thats_bright_a.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "734_prompt_18-layout_2.png",
    opponent:
      "734_v0_q18_r0_thumbnails_2024-07-31_dg-c6d5fefb-db7e-49a9-abd7-9762525df422_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1105_prompt_82-layout_3.png",
    opponent:
      "1105_004_layered_mse_design_class_instagram_post_with_someone_giving_an_online_prese.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "694_prompt_124-layout_5.png",
    opponent:
      "694_v0_q124_r1_thumbnails_2024-07-31_dg-cb1b08ea-eaf4-4d27-b69c-98d859af0890_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "909_prompt_0-layout_3.png",
    opponent: "909_prompt_0_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "957_prompt_108-layout_3.png",
    opponent: "957_prompt109design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1101_prompt_60-layout_1.png",
    opponent:
      "1101_v0_q60_r0_thumbnails_2024-07-31_dg-7e196d2f-f83a-4e2a-8e74-06cc2cc88151_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1393_prompt_52-layout_7.png",
    opponent:
      "1393_004_layered_base_i_provide_AI_chatbots_to_hotels_to_handle_their_cu.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1464_prompt_78-layout_8.png",
    opponent: "1464_002_layered_base_Tech_QA_job_listing_Instagram_post.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1186_prompt_108-layout_6.png",
    opponent: "1186_prompt_108_3.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "976_prompt_167-layout_8.png",
    opponent:
      "976_004_layered_mse_design_class_Instagram_post_showcasing_creative_and_budgetfrien.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "938_prompt_136-layout_10.png",
    opponent:
      "938_001_layered_mse_design_class_Design_an_instagram_post_advertising_a_Christmas_w.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1287_prompt_34-layout_9.png",
    opponent: "1287_prompt_34_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1047_prompt_128-layout_4.png",
    opponent:
      "1047_002_layered_exp_decay_design_class_1_global_news_update_instagram_post_with_world_map_g.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "621_prompt_142-layout_9.png",
    opponent:
      "621_004_ilic_dolly_cream_and_brown_illustrative_simple_tips_to_be_successful_instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "923_prompt_116-layout_0.png",
    opponent:
      "923_002_layered_base_Weekend_farmers_market_fresh_produce_Instagram_pos.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "913_prompt_10-layout_2.png",
    opponent:
      "913_001_layered_mse_design_class_Create_an_Instagram_post_congratulating_a_specific.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "892_prompt_47-layout_10.png",
    opponent:
      "892_003_layered_exp_decay_design_class_1_design_an_instagram_post_advertising_a_youth_advis.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1108_prompt_27-layout_8.png",
    opponent: "1108_prompt_27_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "998_prompt_91-layout_9.png",
    opponent:
      "998_004_layered_base_instagram_post_to_promote_ballet_movies_at_the_sar.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1079_prompt_43-layout_7.png",
    opponent:
      "1079_003_layered_exp_decay_design_class_1_Create_an_instagram_post_of_a_vision_board_in_a_jo.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "995_prompt_153-layout_6.png",
    opponent: "995_prompt154design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1057_prompt_99-layout_1.png",
    opponent:
      "1057_003_layered_mse_design_class_how_to_protect_your_stamina_in_birth_carousel_inst.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "551_prompt_132-layout_7.png",
    opponent:
      "551_004_ilic_dolly_Handmade_jewelry_Jools_chic_Instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "1564_prompt_158-layout_3.png",
    opponent:
      "1564_003_layered_mse_design_class_Design_an_instagram_post_template_for_a_Harbolnas_.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1867_prompt_173-layout_7.png",
    opponent:
      "1867_001_layered_exp_decay_design_class_1_Create_an_instagram_post_letting_people_know_if_th.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "960_prompt_77-layout_1.png",
    opponent:
      "960_002_ilic_dolly_I_am_creating_an_instagram_post_for_my_company_and_need_an_infographic_Specifically_I_am_posting_about_blockchain_custody.png",
    model: "ilic_dolly",
  },
  {
    us: "1984_prompt_168-layout_3.png",
    opponent:
      "1984_003_layered_exp_decay_design_class_1_Favorite_smoothie_recipe_colorful_Instagram_post.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1724_prompt_165-layout_3.png",
    opponent:
      "1724_001_layered_mse_design_class_Create_an_instagram_template_with_a_fantasy_hell_f.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1138_prompt_25-layout_3.png",
    opponent: "1138_prompt_25_3.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "669_prompt_140-layout_7.png",
    opponent:
      "669_v0_q140_r0_thumbnails_2024-07-31_dg-1e91615d-25a3-4268-854a-a7598bdcec6b_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "574_prompt_27-layout_9.png",
    opponent:
      "574_001_ilic_dolly_Develop_a_an_instagram_post_for_Harbolnas_explaining_the_event_to_international_audiences.png",
    model: "ilic_dolly",
  },
  {
    us: "979_prompt_196-layout_0.png",
    opponent:
      "979_004_layered_base_Please_create_a_instagram_post_with_plenty_of_ques.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1603_prompt_173-layout_1.png",
    opponent:
      "1603_004_layered_mse_design_class_Create_an_instagram_post_letting_people_know_if_th.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "856_prompt_88-layout_6.png",
    opponent:
      "856_v0_q88_r3_thumbnails_2024-07-31_dg-2fe9ffdc-44ff-4f72-8ba7-7182689467a1_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "917_prompt_105-layout_2.png",
    opponent:
      "917_001_layered_exp_decay_design_class_1_Motivational_Monday_nature_Instagram_post.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1416_prompt_133-layout_6.png",
    opponent:
      "1416_002_layered_base_laptop_product_launch_templates_for_instagram_post.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1060_prompt_61-layout_2.png",
    opponent:
      "1060_004_layered_base_Instagram_post_showcasing_your_flower_shops_Mother.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "563_prompt_170-layout_2.png",
    opponent:
      "563_003_ilic_dolly_Help_me_make_an_Instagram_post_for_the_end_of_the_year_in_the_style_of_Spotify_Wrapped.png",
    model: "ilic_dolly",
  },
  {
    us: "630_prompt_66-layout_4.png",
    opponent:
      "630_004_ilic_dolly_Instagram_post_celebrating_a_Woman_of_the_Year_in_the_healthcare_industry.png",
    model: "ilic_dolly",
  },
  {
    us: "1072_prompt_104-layout_4.png",
    opponent:
      "1072_003_layered_base_Mothers_Day_selfcare_gift_guide_with_products_avai.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "731_prompt_87-layout_1.png",
    opponent:
      "731_v0_q87_r0_thumbnails_2024-07-31_dg-a5dc66c9-0a16-42ed-a319-78106aadec73_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "479_prompt_40-layout_8.png",
    opponent:
      "479_004_ilic_dolly_Instagram_post_celebrating_my_friend_group_with_a_scrapbook_photo_collage.png",
    model: "ilic_dolly",
  },
  {
    us: "1700_prompt_100-layout_7.png",
    opponent:
      "1700_004_layered_mse_design_class_mustard_and_gray_business_conference_highlights_in.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1064_prompt_198-layout_3.png",
    opponent:
      "1064_002_ilic_dolly_fathers_day_for_restaurant_template_instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "1134_prompt_81-layout_8.png",
    opponent: "1134_prompt_81_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1024_prompt_88-layout_4.png",
    opponent:
      "1024_003_layered_mse_design_class_end_of_financial_year_deals_instagram_post_square_.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "992_prompt_190-layout_8.png",
    opponent: "992_prompt191design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "578_prompt_30-layout_1.png",
    opponent:
      "578_001_ilic_dolly_womens_support_group_or_network_instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "1599_prompt_127-layout_0.png",
    opponent:
      "1599_001_layered_mse_design_class_promoting_a_new_Lacquer_ofnail_polish_collection_i.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "707_prompt_36-layout_7.png",
    opponent:
      "707_v0_q36_r1_thumbnails_2024-07-31_dg-abce0bdd-446b-4ff0-a7cc-4faaa89822ee_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1021_prompt_44-layout_9.png",
    opponent:
      "1021_001_layered_mse_design_class_Create_a_post_to_promote_Melaleuca_the_Wellness_co.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "285_prompt_188-layout_3.png",
    opponent: "285_prompt189design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1080_prompt_187-layout_8.png",
    opponent:
      "1080_v0_q187_r2_thumbnails_2024-07-31_dg-2a0a9eb8-f616-408f-b8cd-80c5bcefbb8f_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1573_prompt_82-layout_7.png",
    opponent:
      "1573_003_layered_mse_design_class_instagram_post_with_someone_giving_an_online_prese.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "937_prompt_108-layout_2.png",
    opponent:
      "937_004_layered_base_Create_an_instagram_post_to_showcase_my_new_romanc.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "910_prompt_16-layout_6.png",
    opponent:
      "910_v0_q16_r0_thumbnails_2024-07-31_dg-f270ad4f-4548-4c7c-84c8-23036009074c_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "600_prompt_53-layout_0.png",
    opponent:
      "600_001_ilic_dolly_media_relations_masterclass_instagram_post_with_expert_panel.png",
    model: "ilic_dolly",
  },
  {
    us: "967_prompt_6-layout_2.png",
    opponent:
      "967_004_layered_base_design_me_an_instagram_post_for_online_physio_free.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1545_prompt_49-layout_3.png",
    opponent:
      "1545_001_layered_base_Make_an_instagram_post_for_national_ice_cream_day_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "918_prompt_6-layout_8.png",
    opponent:
      "918_002_layered_mse_design_class_design_me_an_instagram_post_for_online_physio_free.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "452_prompt_134-layout_4.png",
    opponent:
      "452_004_ilic_dolly_Design_an_Instagram_post_promoting_a_Galentines_Day_special_for_best_friends_at_a_spa_with_stacked_images.png",
    model: "ilic_dolly",
  },
  {
    us: "1810_prompt_187-layout_8.png",
    opponent:
      "1810_003_layered_exp_decay_design_class_1_Local_theater_production_Sydney_Instagram_post.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1525_prompt_124-layout_0.png",
    opponent:
      "1525_002_layered_base_instagram_post_highlighting_our_number_one_achivem.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1045_prompt_78-layout_8.png",
    opponent:
      "1045_004_layered_mse_design_class_Tech_QA_job_listing_Instagram_post.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "359_prompt_1-layout_7.png",
    opponent: "359_prompt2design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
];

const losses = [
  {
    us: "1277_prompt_64-layout_7.png",
    opponent: "1277_prompt_64_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "41_prompt_147-layout_4.png",
    opponent: "41_prompt148design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "889_prompt_158-layout_8.png",
    opponent:
      "889_002_layered_base_Design_an_instagram_post_template_for_a_Harbolnas_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "60_prompt_99-layout_6.png",
    opponent: "60_prompt100design3.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "969_prompt_60-layout_7.png",
    opponent: "969_prompt61design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "826_prompt_121-layout_1.png",
    opponent:
      "826_v0_q121_r3_thumbnails_2024-07-31_dg-4d933766-328c-4b68-8626-8435bf009c62_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "940_prompt_56-layout_3.png",
    opponent: "940_prompt57design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1025_prompt_170-layout_2.png",
    opponent: "1025_prompt171design2.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1059_prompt_88-layout_6.png",
    opponent:
      "1059_v0_q88_r2_thumbnails_2024-07-31_dg-28943caa-e6ac-46f3-b473-30c85a8b8d00_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1027_prompt_107-layout_3.png",
    opponent: "1027_prompt108design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1056_prompt_2-layout_7.png",
    opponent:
      "1056_004_layered_exp_decay_design_class_1_Ivory_brown_modern_hello_autumn_photo_collage_anim.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1012_prompt_110-layout_8.png",
    opponent: "1012_prompt_110_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "952_prompt_41-layout_2.png",
    opponent: "952_prompt42design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1048_prompt_82-layout_1.png",
    opponent:
      "1048_002_layered_mse_design_class_instagram_post_with_someone_giving_an_online_prese.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "18_prompt_22-layout_5.png",
    opponent: "18_prompt23design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1325_prompt_13-layout_2.png",
    opponent: "1325_prompt_13_3.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "982_prompt_37-layout_10.png",
    opponent:
      "982_v0_q37_r2_thumbnails_2024-07-31_dg-46f4fb4e-5c68-4203-aa28-33864f8ec48b_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1923_prompt_169-layout_4.png",
    opponent:
      "1923_002_layered_exp_decay_design_class_1_Instagram_post_promoting_a_Love_Yourself_workshop_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1016_prompt_189-layout_2.png",
    opponent:
      "1016_003_ilic_dolly_help_me_design_an_Instagram_post_for_handmade_wooden_toys_as_perfect_hanukkah_gifts.png",
    model: "ilic_dolly",
  },
  {
    us: "897_prompt_34-layout_8.png",
    opponent: "897_prompt35design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "919_prompt_186-layout_10.png",
    opponent:
      "919_v0_q186_r3_thumbnails_2024-07-31_dg-8dc76c60-cc08-4063-960f-7cda842b0896_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1034_prompt_98-layout_5.png",
    opponent:
      "1034_003_ilic_dolly_Design_an_Instagram_post_featuring_God_Save_the_Queen_lyrics_and_their_connection_to_Victoria_Day_incorporating_red_themes_and_royal_imagery.png",
    model: "ilic_dolly",
  },
  {
    us: "894_prompt_179-layout_7.png",
    opponent: "894_prompt180design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1055_prompt_70-layout_7.png",
    opponent:
      "1055_001_layered_mse_design_class_Instagram_post_showcasing_the_benefits_of_gender_d.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "981_prompt_54-layout_8.png",
    opponent:
      "981_001_layered_base_blue__yellow_Technical_marketing_agency_instagram_.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1909_prompt_109-layout_5.png",
    opponent:
      "1909_001_layered_exp_decay_design_class_1_Create_an_instagram_post_about_giving_Tuesday_for_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1019_prompt_80-layout_4.png",
    opponent:
      "1019_001_layered_exp_decay_design_class_1_Design_an_Instagram_post_featuring_a_diverse_group.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "899_prompt_143-layout_3.png",
    opponent:
      "899_v0_q143_r0_thumbnails_2024-07-31_dg-0eab5987-ddc7-44f1-ae4a-cb8cd81fd00a_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1170_prompt_107-layout_2.png",
    opponent: "1170_prompt_107_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "934_prompt_90-layout_6.png",
    opponent: "934_prompt_90_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1523_prompt_102-layout_4.png",
    opponent:
      "1523_004_layered_base_instagram_post_to_announce_a_bubble_tea_and_collag.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "973_prompt_38-layout_8.png",
    opponent:
      "973_v0_q38_r3_thumbnails_2024-07-31_dg-12775268-901d-488e-81d3-4dba39e3be30_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "994_prompt_131-layout_3.png",
    opponent:
      "994_v0_q131_r3_thumbnails_2024-07-31_dg-3b9d17e1-2e65-4533-a594-5d197d453dd9_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1280_prompt_18-layout_2.png",
    opponent: "1280_prompt_18_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "130_prompt_51-layout_8.png",
    opponent: "130_prompt52design3.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1044_prompt_177-layout_6.png",
    opponent: "1044_prompt178design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1500_prompt_22-layout_4.png",
    opponent:
      "1500_001_layered_base_Create_an_Instagram_post_highlighting_a_specific_P.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1014_prompt_162-layout_0.png",
    opponent: "1014_prompt163design3.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "24_prompt_29-layout_10.png",
    opponent: "24_prompt30design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1071_prompt_111-layout_9.png",
    opponent:
      "1071_v0_q111_r1_thumbnails_2024-07-31_dg-fe31ea78-2395-4e09-a8ea-9bcd32d9e2a0_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "927_prompt_166-layout_2.png",
    opponent:
      "927_004_layered_exp_decay_design_class_1_collage_style_instagram_post_celebrating_friends_b.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "972_prompt_25-layout_5.png",
    opponent: "972_prompt26design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1254_prompt_104-layout_4.png",
    opponent: "1254_prompt_104_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1033_prompt_45-layout_4.png",
    opponent: "1033_prompt46design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "782_prompt_131-layout_0.png",
    opponent:
      "782_v0_q131_r2_thumbnails_2024-07-31_dg-4407c677-b3e5-4cf3-ae7a-f212972a6179_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "315_prompt_125-layout_7.png",
    opponent: "315_prompt126design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "412_prompt_174-layout_0.png",
    opponent: "412_prompt175design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "337_prompt_61-layout_0.png",
    opponent: "337_prompt62design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "939_prompt_57-layout_3.png",
    opponent: "939_prompt58design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1490_prompt_28-layout_4.png",
    opponent:
      "1490_003_layered_base_instagram_post_as_like_share_and_follow_for_bussin.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1374_prompt_17-layout_4.png",
    opponent:
      "1374_003_layered_base_Create_a_visually_appealing_Instagram_post_explain.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1049_prompt_91-layout_1.png",
    opponent:
      "1049_002_layered_exp_decay_design_class_1_instagram_post_to_promote_ballet_movies_at_the_sar.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "733_prompt_191-layout_6.png",
    opponent:
      "733_v0_q191_r1_thumbnails_2024-07-31_dg-9518d982-5cff-4f84-b1da-82bd9add1444_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "955_prompt_38-layout_4.png",
    opponent: "955_prompt39design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1005_prompt_7-layout_0.png",
    opponent: "1005_prompt8design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1093_prompt_192-layout_7.png",
    opponent:
      "1093_001_layered_mse_design_class_Bright_and_lively_instagram_post_free_cofee_at_lau.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1090_prompt_159-layout_4.png",
    opponent: "1090_prompt160design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1263_prompt_85-layout_1.png",
    opponent: "1263_prompt_85_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1091_prompt_198-layout_4.png",
    opponent: "1091_prompt199design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1162_prompt_63-layout_0.png",
    opponent: "1162_prompt_63_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "89_prompt_16-layout_5.png",
    opponent: "89_prompt17design2.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "735_prompt_182-layout_9.png",
    opponent:
      "735_v0_q182_r1_thumbnails_2024-07-31_dg-a928b306-6980-4a0e-a37e-74bea33a60ae_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "888_prompt_10-layout_5.png",
    opponent:
      "888_v0_q10_r2_thumbnails_2024-07-31_dg-3ae5c60e-7c38-468d-9434-5df75add38a9_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "142_prompt_25-layout_3.png",
    opponent: "142_prompt26design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1006_prompt_18-layout_8.png",
    opponent:
      "1006_003_layered_exp_decay_design_class_1_create_a_instagram_post_bright_30_off_for_product_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "978_prompt_197-layout_8.png",
    opponent: "978_prompt198design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1015_prompt_91-layout_7.png",
    opponent:
      "1015_003_layered_base_instagram_post_to_promote_ballet_movies_at_the_sar.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1092_prompt_1-layout_7.png",
    opponent: "1092_prompt2design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1003_prompt_63-layout_10.png",
    opponent: "1003_prompt64design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1084_prompt_20-layout_10.png",
    opponent: "1084_prompt21design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "931_prompt_22-layout_7.png",
    opponent: "931_prompt23design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1888_prompt_137-layout_5.png",
    opponent:
      "1888_003_layered_exp_decay_design_class_1_Red_and_white_photocentric_tattoo_business_instagr.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "974_prompt_130-layout_8.png",
    opponent: "974_prompt_130_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "649_prompt_16-layout_0.png",
    opponent:
      "649_004_ilic_dolly_instagram_postwhite_background_with_dash_of_colour.png",
    model: "ilic_dolly",
  },
  {
    us: "507_prompt_187-layout_8.png",
    opponent:
      "507_004_ilic_dolly_Local_theater_production_Sydney_Instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "977_prompt_149-layout_7.png",
    opponent: "977_prompt150design2.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1784_prompt_189-layout_7.png",
    opponent:
      "1784_003_layered_exp_decay_design_class_1_help_me_design_an_Instagram_post_for_handmade_wood.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "944_prompt_46-layout_9.png",
    opponent: "944_prompt_46_0.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1065_prompt_45-layout_0.png",
    opponent:
      "1065_003_ilic_dolly_white_and_green_illustrative_cocktail_promotions_instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "1008_prompt_83-layout_5.png",
    opponent: "1008_prompt84design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "799_prompt_116-layout_0.png",
    opponent:
      "799_v0_q116_r3_thumbnails_2024-07-31_dg-abba08d1-791f-4105-b482-e78431b31a6e_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1088_prompt_49-layout_9.png",
    opponent: "1088_prompt_49_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "232_prompt_129-layout_10.png",
    opponent: "232_prompt130design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1052_prompt_110-layout_6.png",
    opponent:
      "1052_v0_q110_r0_thumbnails_2024-07-31_dg-16c4ef8e-93fe-49f8-b524-7764bb995b4b_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "980_prompt_181-layout_5.png",
    opponent:
      "980_v0_q181_r2_thumbnails_2024-07-31_dg-0d485ad0-79cc-4bb9-b5e0-cd2e4b81e0af_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "423_prompt_44-layout_9.png",
    opponent: "423_prompt45design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "895_prompt_106-layout_9.png",
    opponent: "895_prompt107design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "534_prompt_165-layout_9.png",
    opponent:
      "534_004_ilic_dolly_Create_an_instagram_template_with_a_fantasy_hell_feeling_inspired_by_dia_de_los_muertos.png",
    model: "ilic_dolly",
  },
  {
    us: "1817_prompt_196-layout_6.png",
    opponent:
      "1817_003_layered_exp_decay_design_class_1_Please_create_a_instagram_post_with_plenty_of_ques.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "953_prompt_40-layout_10.png",
    opponent: "953_prompt41design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1298_prompt_54-layout_10.png",
    opponent: "1298_prompt_54_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1104_prompt_83-layout_7.png",
    opponent: "1104_prompt84design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "95_prompt_85-layout_1.png",
    opponent: "95_prompt86design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "990_prompt_124-layout_5.png",
    opponent: "990_prompt125design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "868_prompt_7-layout_0.png",
    opponent:
      "868_v0_q7_r3_thumbnails_2024-07-31_dg-d8627e02-e3bc-4c9a-8c5a-33adc5d1b0bc_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "364_prompt_3-layout_5.png",
    opponent: "364_prompt4design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "988_prompt_197-layout_1.png",
    opponent: "988_prompt_197_3.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1110_prompt_53-layout_5.png",
    opponent: "1110_prompt_53_3.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "226_prompt_144-layout_8.png",
    opponent: "226_prompt145design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "989_prompt_16-layout_5.png",
    opponent:
      "989_004_ilic_dolly_instagram_postwhite_background_with_dash_of_colour.png",
    model: "ilic_dolly",
  },
  {
    us: "1085_prompt_188-layout_10.png",
    opponent:
      "1085_004_layered_exp_decay_design_class_1_Anniversary_sale_featuring_products_instagram_post.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "783_prompt_153-layout_9.png",
    opponent:
      "783_v0_q153_r1_thumbnails_2024-07-31_dg-ed7efebc-ce61-4ed4-8b8e-eb54c97ab3ec_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "925_prompt_137-layout_7.png",
    opponent: "925_prompt138design4.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "949_prompt_136-layout_6.png",
    opponent:
      "949_v0_q136_r2_thumbnails_2024-07-31_dg-37c042eb-de36-497a-b753-a573d113f467_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1062_prompt_180-layout_2.png",
    opponent: "1062_prompt181design3.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1120_prompt_70-layout_6.png",
    opponent: "1120_prompt_70_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1081_prompt_62-layout_8.png",
    opponent: "1081_prompt_62_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1868_prompt_99-layout_10.png",
    opponent:
      "1868_002_layered_exp_decay_design_class_1_how_to_protect_your_stamina_in_birth_carousel_inst.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "803_prompt_65-layout_9.png",
    opponent:
      "803_v0_q65_r2_thumbnails_2024-07-31_dg-4ffa8cec-5625-4af0-acd1-cdcc2466cb22_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "905_prompt_136-layout_1.png",
    opponent: "905_prompt_136_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "576_prompt_55-layout_8.png",
    opponent:
      "576_004_ilic_dolly_tech_talk_event_instagram_post_with_blue_and_white_minimalist_design.png",
    model: "ilic_dolly",
  },
  {
    us: "933_prompt_191-layout_6.png",
    opponent: "933_prompt192design2.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1636_prompt_144-layout_6.png",
    opponent:
      "1636_001_layered_mse_design_class_Ecofriendly_product_testimonial_minimal_Instagram_.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "420_prompt_92-layout_9.png",
    opponent: "420_prompt93design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "327_prompt_51-layout_8.png",
    opponent: "327_prompt52design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "902_prompt_173-layout_8.png",
    opponent:
      "902_001_ilic_dolly_Create_an_instagram_post_letting_people_know_if_they_are_turning_26_they_need_to_have_their_own_healt_insurance_plan_away_from_their_parents.png",
    model: "ilic_dolly",
  },
  {
    us: "309_prompt_74-layout_0.png",
    opponent: "309_prompt75design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "947_prompt_140-layout_10.png",
    opponent: "947_prompt141design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "963_prompt_179-layout_8.png",
    opponent: "963_prompt_179_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1077_prompt_37-layout_1.png",
    opponent:
      "1077_v0_q37_r0_thumbnails_2024-07-31_dg-4172b10d-bc3d-457c-b0f5-bd64f50cb27b_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1095_prompt_35-layout_5.png",
    opponent: "1095_prompt36design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "829_prompt_194-layout_5.png",
    opponent:
      "829_v0_q194_r3_thumbnails_2024-07-31_dg-1837de6f-73bc-42b5-a79e-7aacdb1115cc_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1020_prompt_162-layout_5.png",
    opponent:
      "1020_v0_q162_r1_thumbnails_2024-07-31_dg-db7f39d5-75da-4138-9f81-b22b5db8b3b2_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "936_prompt_32-layout_9.png",
    opponent: "936_prompt_32_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1098_prompt_119-layout_1.png",
    opponent:
      "1098_003_layered_exp_decay_design_class_1_Instagram_post_comparing_regular_prices_to_Singles.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "859_prompt_73-layout_4.png",
    opponent:
      "859_v0_q73_r3_thumbnails_2024-07-31_dg-5dc95697-b0b6-4141-beb1-1077e5a86bdf_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1004_prompt_53-layout_5.png",
    opponent:
      "1004_v0_q53_r3_thumbnails_2024-07-31_dg-e23de662-11d1-43f9-8fd7-8fe11a956328_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1082_prompt_154-layout_9.png",
    opponent: "1082_prompt155design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "926_prompt_175-layout_6.png",
    opponent:
      "926_004_layered_mse_design_class_Can_we_create_a_summer_camp_instagram_post_for_ath.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "916_prompt_70-layout_3.png",
    opponent:
      "916_v0_q70_r0_thumbnails_2024-07-31_dg-fb1c5341-79db-449a-a39a-c65703d40311_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "984_prompt_161-layout_8.png",
    opponent:
      "984_002_layered_mse_design_class_inspiring_message_instagram_post_support_for_all_p.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "177_prompt_111-layout_9.png",
    opponent: "177_prompt112design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1011_prompt_100-layout_7.png",
    opponent: "1011_prompt101design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "908_prompt_63-layout_5.png",
    opponent:
      "908_v0_q63_r1_thumbnails_2024-07-31_dg-6e2666f0-a1de-47a8-9b99-aaa46b1c64dd_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "125_prompt_86-layout_1.png",
    opponent: "125_prompt87design2.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "686_prompt_56-layout_3.png",
    opponent:
      "686_v0_q56_r1_thumbnails_2024-07-31_dg-23c5ba23-93db-4bf0-be61-12398e472031_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "898_prompt_182-layout_3.png",
    opponent: "898_prompt_182_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1307_prompt_174-layout_0.png",
    opponent: "1307_prompt_174_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1083_prompt_112-layout_10.png",
    opponent:
      "1083_002_layered_exp_decay_design_class_1_Minimalist_background_for_quotes_forinstagram_post.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1076_prompt_88-layout_8.png",
    opponent: "1076_prompt89design3.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1028_prompt_52-layout_9.png",
    opponent: "1028_prompt53design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "928_prompt_167-layout_1.png",
    opponent: "928_prompt_167_3.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1086_prompt_43-layout_5.png",
    opponent:
      "1086_002_layered_base_Create_an_instagram_post_of_a_vision_board_in_a_jo.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "840_prompt_76-layout_0.png",
    opponent:
      "840_v0_q76_r0_thumbnails_2024-07-31_dg-8cbaa600-f52c-4fb4-a06a-8e4d11c2968b_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1550_prompt_69-layout_10.png",
    opponent:
      "1550_002_layered_base_design_instagram_post_my_physio_told_me_the_pain_i.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1494_prompt_30-layout_7.png",
    opponent:
      "1494_004_layered_base_womens_support_group_or_network_instagram_post.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1275_prompt_81-layout_5.png",
    opponent: "1275_prompt_81_3.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "708_prompt_15-layout_2.png",
    opponent:
      "708_v0_q15_r1_thumbnails_2024-07-31_dg-923486a3-3aad-4301-a8eb-794c6a39b4b6_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1068_prompt_134-layout_2.png",
    opponent: "1068_prompt135design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "893_prompt_55-layout_8.png",
    opponent: "893_prompt56design2.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "958_prompt_8-layout_6.png",
    opponent:
      "958_v0_q8_r3_thumbnails_2024-07-31_dg-b968d7c7-2c79-4bb7-9a2f-dd1a2b4384a4_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "1046_prompt_75-layout_0.png",
    opponent: "1046_prompt_75_3.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "824_prompt_67-layout_10.png",
    opponent:
      "824_v0_q67_r2_thumbnails_2024-07-31_dg-c203a036-554a-46c1-bee8-c910f9d8fedc_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "964_prompt_84-layout_5.png",
    opponent:
      "964_v0_q84_r0_thumbnails_2024-07-31_dg-e7817fa1-69e3-41c0-8121-b329b150a594_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "390_prompt_102-layout_4.png",
    opponent: "390_prompt103design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1488_prompt_11-layout_8.png",
    opponent:
      "1488_003_layered_base_instagram_post_for_selling_digital_marketing_cours.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "1067_prompt_188-layout_3.png",
    opponent: "1067_prompt189design3.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1050_prompt_2-layout_3.png",
    opponent:
      "1050_003_ilic_dolly_Ivory_brown_modern_hello_autumn_photo_collage_animated_instagram_post.png",
    model: "ilic_dolly",
  },
  {
    us: "1096_prompt_158-layout_6.png",
    opponent:
      "1096_002_layered_exp_decay_design_class_1_Design_an_instagram_post_template_for_a_Harbolnas_.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "896_prompt_103-layout_10.png",
    opponent: "896_prompt104design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "479_prompt_40-layout_8.png",
    opponent:
      "479_004_ilic_dolly_Instagram_post_celebrating_my_friend_group_with_a_scrapbook_photo_collage.png",
    model: "ilic_dolly",
  },
  {
    us: "97_prompt_145-layout_4.png",
    opponent: "97_prompt146design2.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "153_prompt_172-layout_10.png",
    opponent: "153_prompt173design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1718_prompt_53-layout_5.png",
    opponent:
      "1718_001_layered_mse_design_class_media_relations_masterclass_instagram_post_with_ex.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "672_prompt_55-layout_8.png",
    opponent:
      "672_v0_q55_r3_thumbnails_2024-07-31_dg-042c9fdc-3a51-40be-ac26-084820cd2d22_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "991_prompt_191-layout_1.png",
    opponent:
      "991_004_layered_exp_decay_design_class_1_Create_an_Instagram_post_template_that_will_accomm.png",
    model: "layered_exp_decay_design_class_1",
  },
  {
    us: "1599_prompt_127-layout_0.png",
    opponent:
      "1599_001_layered_mse_design_class_promoting_a_new_Lacquer_ofnail_polish_collection_i.png",
    model: "Miedinger-2layered_mse_design_class",
  },
  {
    us: "1029_prompt_144-layout_6.png",
    opponent: "1029_prompt145design4.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "1026_prompt_85-layout_3.png",
    opponent: "1026_prompt_85_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "342_prompt_124-layout_6.png",
    opponent: "342_prompt125design3.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1445_prompt_149-layout_7.png",
    opponent: "1445_004_layered_base_adopted_family_love_instagram_post.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "920_prompt_111-layout_8.png",
    opponent: "920_prompt112design1.png",
    model: "CanvaMarketplaceBenchmark",
  },
  {
    us: "568_prompt_161-layout_1.png",
    opponent:
      "568_004_ilic_dolly_inspiring_message_instagram_post_support_for_all_paralympic_athletes_sportsmanship_and_perseverance.png",
    model: "ilic_dolly",
  },
  {
    us: "890_prompt_189-layout_7.png",
    opponent: "890_prompt190design2.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1001_prompt_161-layout_1.png",
    opponent:
      "1001_001_layered_base_inspiring_message_instagram_post_support_for_all_p.png",
    model: "Miedinger-2layered_base",
  },
  {
    us: "812_prompt_126-layout_7.png",
    opponent:
      "812_v0_q126_r0_thumbnails_2024-07-31_dg-32a308df-4722-4dab-b281-cdb7a7ac91c3_0.png",
    model: "Compositional Magic Design",
  },
  {
    us: "404_prompt_127-layout_4.png",
    opponent: "404_prompt128design1.jpeg",
    model: "MicrosoftDesignerBenchmark",
  },
  {
    us: "1035_prompt_55-layout_4.png",
    opponent: "1035_prompt_55_1.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
  {
    us: "1244_prompt_129-layout_10.png",
    opponent: "1244_prompt_129_2.jpg",
    model: "Leonardo.Ai: Phoenix",
  },
];

const goldenPrompts200 = [
  `Help me design an Instagram post celebrating the fact that I now have a thousand followers`,
  `For Argentina, design an Instagram post showcasing special edition foods launched by local businesses to support the national women's footbal team`,
  `Ivory brown modern hello autumn photo collage animated instagram post`,
  `leadership development workshop instagram post in corporate colors`,
  `instagram post explaining how our business supports LGBTQ+ love and relationships year-round`,
  `an instagram post finance Early Career Credit Analyst Financial Analyst Loan Officer Compliance Analyst Mid-Career Commercial Banker Risk Manager`,
  `design me an instagram post for online physio free consultations in white black and orange`,
  `Make an instagram post showcasing the best Victoria Day events and fireworks displays in your area for 2023`,
  `Pottery studio creations earthy Instagram post`,
  `6 point circle instagram post showing 6 different things`,
  `Create an Instagram post congratulating a specific athlete or team on their Paralympic victory, featuring their photo and a brief description of their achievement`,
  `instagram post for selling digital marketing course`,
  `instagram post computer graphics card carousel post`,
  `Instagram post announcing an International Women's Day event, including date, time, and key speakers`,
  `design a instagram post showing business hours for a tarot reader. use a vintage serif font`,
  `an instagram post for my inclusive personal training business`,
  `instagram postwhite background with dash of colour`,
  `Create a visually appealing Instagram post explaining the connection between hormones and mental health`,
  `create a instagram post bright 30% off for product star-shaped callout`,
  `can we create a instagram post for a grand opening`,
  `Design an Instagram post with a quiz format to educate followers about LGBTQ+ rights and history`,
  `Give me an instagram template to promote a discount on a book`,
  `Create an Instagram post highlighting a specific Paralympic sport, explaining how it's played and any adaptive equipment used`,
  `Create an Instagram post promoting a webinar on "Creating Accessible User Experiences" for GAAD`,
  `I'd like to create an instagram post about summer skincare`,
  `Make me an instagram post with an image of a director shooting a commercial`,
  `farmers market looking for new vendor instagram post`,
  `Develop a an instagram post for Harbolnas, explaining the event to international audiences`,
  `instagram post as like share and follow for bussiness account professional style`,
  `create an instagram post with the headline "The obesity epidemic in the US started at almost the exact same time the low-fat dietary guidelines were published" with room for a graph`,
  `women's support group or network instagram post`,
  `a heartfelt Mother's Day greeting instagram post with a personal photo and touching message about my mom`,
  `Instagram post announcing a watch party for a major Olympic event`,
  `Create a social media post for Instagram showing somebody barefoot in the desert walking against the wind`,
  `Design an instagram post for cancer season`,
  `educational Instagram post explaining the significance of National Indigenous People's Day`,
  `showcase global initiatives working to improve girls' access to education in an Instagram post`,
  `Can you create an instagram post with Orange and Klein blue colors at the top with some shapes and red and black at the bottom with some shapes`,
  `podcast guest announcement instagram post with profile photo`,
  `can we create a post for a farmer’s market`,
  `Instagram post celebrating my friend group with a scrapbook photo collage`,
  `Create a Under Contract instagram post: 298 West Vally Road, Honolulu Use dark blue and white color scheme`,
  `create an instagram post about being authentic`,
  `Create an instagram post of a vision board in a journal and blank space in the middle for text. Use Pastel Colours.`,
  `Create a post to promote Melaleuca, the Wellness company`,
  `white and green illustrative cocktail promotions instagram post`,
  `instagram post photo sharing a childrens book to everyone`,
  `design an instagram post advertising a youth advisory council volunteer opportunity`,
  `make a eye catching colourful instagram post for purfleet military muse3um`,
  `Make an instagram post for national ice cream day featuring Joe biden`,
  `create an engaging instagram post on world yoga day with green header and footer`,
  `Create an instagram post to market a mobile bookstore`,
  `i provide AI chatbots to hotels to handle their customer queries. I want to make an instagram post about promoting my product/service. use navy and gold colour theme`,
  `media relations masterclass instagram post with expert panel`,
  `blue & yellow Technical marketing agency instagram post`,
  `tech talk event instagram post with blue and white minimalist design`,
  `Create an Instagram post explaining the history and significance of Saint-Jean-Baptiste Day for those unfamiliar with the holiday. Use an image with text overlay`,
  `Hospitality job listing Instagram post`,
  `top 5 restaurant recommendations for Mother's Day brunch in my city instagram post`,
  `Generate instagram post happy diwali`,
  `breaking news financial update instagram post with stock market graph`,
  `Instagram post showcasing your flower shop's Mother's Day bouquet collection, highlighting a special discount for early orders.`,
  `Make ma an isntagram post advertising a new yoga instructor`,
  `Diwali kids celebration Instagram post`,
  `Happy birthday instagram post for my freind Andie. craete an image with a boat on a lek`,
  `Create a square instagram post of an image of a brain. Include a quote about mental health in the workplace.`,
  `Instagram post celebrating a "Woman of the Year" in the healthcare industry`,
  `White, Blue and yellow Char Dham Yatra travel agency instagram post (A5)`,
  `Design an Instagram post featuring your handcrafted jewelry Mother's Day collection, with close-up images of unique pieces.`,
  `design instagram post "my physio told me the pain is in my head" comic-style`,
  `Instagram post showcasing the benefits of gender diversity in the workplace`,
  `Create instagram post calling for support for people going through menopause`,
  `Instagram post highlighting women breaking barriers in traditionally male-dominated fields`,
  `instagram post for a medical center providing free consultations on world hepatitis day`,
  `Art exhibition abstract Instagram post`,
  `EV startup auto show Instagram post`,
  `Can you make an instagram post featuring a ten-minute core workout, including an exercise.`,
  `I am creating an instagram post for my company and need an infographic. Specifically I am posting about blockchain custody`,
  `Tech QA job listing Instagram post`,
  `Solar panel installation company advertising insta post`,
  `Design an Instagram post featuring a diverse group of women, emphasizing the inclusive nature of women's empowerment`,
  `Instagram post showcasing your restaurant's Mother's Day brunch menu, including a complimentary mimosa for moms.`,
  `instagram post with someone giving an online presentationpresentation screen`,
  `templatefor instagram post with ramadan theme`,
  `Develop an instagram post highlighting Black Friday beauty deals with before-and-after transformation`,
  `Make me a post to reveal raffle prizes, themed around Carnival`,
  `Sustainable camping tips Instagram post`,
  `podcast episode recap instagram post with bullet points`,
  `end of financial year deals instagram post square animated`,
  `design an instagram post to promote my custom designed party favors teal and orange`,
  `write a just sold instagram post for 172 Upper Horse Lane, C-19, Narmham.  Sold for $490,000 description: This beautifully renovated home nestled in the tranquil setting of Bear Creek presents a rare opportunity for those seeking comfort and adventure in Vermont. Boasting three bedrooms and three baths, including two en-suite baths upstairs and a bedroom and bath on the main level, it offers ample space for relaxation and privacy. The focal point of the living/dining area is the magnificent stone fireplace, ensuring cozy gatherings, with unlimited firewood conveniently delivered to you and stacked in the wood closet right outside the front door. Located just minutes from the slopes of Stratton Mountain, outdoor enthusiasts will delight in the proximity to all-season enjoyment. During the winter months, take advantage of the convenient shuttle service to Stratton. But the allure of this home extends beyond winter sports. Spring, summer, and fall beckon with tennis matches on the courts and children exploring the playground. Cool off in the inviting swimming pool during the warmer months, or gather around the fire pit for cozy evenings throughout the year. Moreover, the present of a full-time caretaker ensures that every detail is taken care of, allowing you to fully immerse yourself in the Horse Creek lifestyle. Please make it that Martton Sales and Rentals can sell your home too`,
  `instagram post to promote ballet movies at the sarasota opera house`,
  `June 21 2024 indigenous peoples day instagram posts`,
  `Give me a template for an instagram post announcing my Drumap CMS training session. The training will cover a range of topics, including content creation and editing, understanding Drupal's structure, working with modules and themes, and interpreting website analytics. `,
  `corporate training seminar instagram post featuring group activities`,
  `Make an Instagram post showcasing your company's commitment to digital accessibility, featuring new accessible features or services`,
  `World menopause day instagram post raising awareness for women going through menopause through the World Menopause Day`,
  `Instagram post announcing a Mother's Day spa package, perfect for gifting or for moms to treat themselves`,
  `Design an Instagram post featuring "God Save the Queen" lyrics and their connection to Victoria Day, incorporating red themes and royal imagery.`,
  `how to protect your stamina in birth carousel instagram posts`,
  `mustard and gray business conference highlights instagram post`,
  `Community clean-up celebration Instagram post`,
  `instagram post to announce a bubble tea and collage collaboration`,
  `can we make a post about going to texas tech`,
  `Mother's Day self-care gift guide, with products available at your store instagram post`,
  `Motivational Monday nature Instagram post`,
  `design a facebook post to recruit fosters for a small dog rescue`,
  `Local music festival retro vinyl Instagram post`,
  `Create an instagram post to showcase my new romance novel set on Gran Canaria`,
  `Create an instagram post about giving Tuesday for a dog rescue.`,
  `a heartwarming instagram post wishing a happy birthday`,
  `blue fantasy instagram post announcing giveaway winners with a handwritten font`,
  `Minimalist background for quotes forinstagram post`,
  `instagram post event water meet and greet date time photo`,
  `a vintage-inspired baptismal thank you instagram post thanking the attendees`,
  `Instagram post featuring inspiring quotes from both male and female football players about determination and winning`,
  `Weekend farmers market fresh produce Instagram post`,
  `templates for business celebrations for instagram post`,
  `New vegan cafe delicious dishes Instagram post`,
  `Instagram post comparing regular prices to Singles Day sale prices`,
  `blue and purple retro illustrative Instagram post announcing a local Pride parade`,
  `Create an instagram post about dogs being man's best friend`,
  `I need to make an instagram post meme. You will help me. The meme is to post on our business social media account. We want it to be about Bria. Bria is our AI assistant that helps Airbnb hosts and Airbnb management companies answer guest questions faster without having to stress or be on their phones 24/7. Bria replies instantly 24/7 which helps with guest satisfaction. She also gives local recommendations about activities and restaurants.`,
  `Instagram post showcasing the current medal tally for the top 5 countries in the Olympics, using flag icons and medal emojis`,
  `instagram post highlighting our number one achivement`,
  `orange green brown realistic wildlife birthday invitation instagram post`,
  `Design an instagram post celebrating Fête nationale du Québec, incorporating the Quebec flag and natural scenery.`,
  `promoting a new Lacquer ofnail polish collection instagram post`,
  `global news update instagram post with world map graphic`,
  `I would like to create post about the importance of self-care to post to instagram`,
  `I want to create a post to sell my house 356 Seaview Ln, Miami, FL 32746. This should be used to post on instagram`,
  `instagram post design with a beige minimalist theme for fashion influencers`,
  `Handmade jewelry "Jools" chic Instagram post`,
  `laptop product launch templates for instagram post`,
  `Design an Instagram post promoting a "Galentine's Day" special for best friends at a spa with stacked images`,
  `Create an instagram post template for a planner and journal business with geometric sans-serif fonts`,
  `Design an instagram post advertising a Christmas wine tasting and dinner event on December 18, 6-8pm. RSVP link in bio. Pequeños tapas wine bar`,
  `Red and white photo-centric tattoo business instagram post`,
  `carousel instagram posts for lead generation for real estate properties`,
  `Charity run colorful graphics Instagram post`,
  `happy 4th of july blue and red minimalist instagram post`,
  `hiring instagram post for sales man and tele caller`,
  `cream and brown illustrative simple tips to be successful instagram post`,
  `an instagram post introducing a brand new collection`,
  `Eco-friendly product testimonial minimal Instagram post`,
  `instagram post announcing Park Bank as returning sponsor`,
  `Black and beige minimalistic simple instagram post`,
  `Design a futuristic neon Cyber Monday Instagram post template for fitness equipment sales`,
  `can we create a 4th of july instagram post`,
  `adopted family love instagram post`,
  `a vibrant instagram post highlighting our rakshabandhan on agriculture product marketing summiti`,
  `Make an Instagram post featuring a series of quotes from employees about what inclusion means to them in a grid layout`,
  `Summer yoga retreat beach Instagram post`,
  `Create an instagram post of friends smiling and laughing with drinks at a bar. The copy should say “Bear’s Bar Now Open”. fun vibes`,
  `Make an Instagram post announcing your company's donation drive for refugees, including how followers can participate. The number is big`,
  `Design a heartwarming Instagram post showcasing the impact of donations for Giving Tuesday`,
  `instagram post for advertising invitation cards desginer`,
  `instagram post video for communication skill and self developement`,
  `Design an instagram post template for a "Harbolnas Haul" series featuring influencers showing off their purchases`,
  `elegant high ticket international law instagram post primal`,
  `instagram post showcasing earrings and bangles repeating circular shapes`,
  `inspiring message instagram post support for all paralympic athletes sportsmanship and perseverance`,
  `5 photo collage with shades of purple instagram posts`,
  `create instagram post - Elevate Physiotherapy are proving sports massage, dry needling & taping for a cross fit competition`,
  `Can you design a post for my instagram page where I want to promote the swimsuits I design? With geometric patterns`,
  `Create an instagram template with a fantasy hell feeling inspired by dia de los muertos`,
  `collage style instagram post celebrating friend's birthday(rectangular)`,
  `Instagram post showcasing creative and budget-friendly date ideas for couples`,
  `Favorite smoothie recipe colorful Instagram post`,
  `Instagram post promoting a "Love Yourself" workshop or event, focusing on self-care and personal growth`,
  `Help me make an Instagram post for the end of the year in the style of Spotify Wrapped.`,
  `instagram post to communicate messaging about an insight about sponsorship and collaboration with hand-drawn icons`,
  `sales funnel infographics template for instagram post`,
  `Create an instagram post letting people know if they are turning 26 they need to have their own healt insurance plan away from their parents`,
  `Mother's Day themed recipe that followers can make with or for their moms instagram post`,
  `Can we create a summer camp instagram post for athletes`,
  `Instagram post with ideas for a virtual Mother's Day celebration, ideal for families separated by distance`,
  `I'd like to create an instagram post that's bright and fun about balanced nutrition`,
  `best friend appreciation Instagram post, featuring our favorite photos together and inside joke about potatoes`,
  `Cozy reading nook, books, quote Instagram post`,
  `Create an instagram post template for a planner and journal business with geometric sans-serif fonts with overlapping images`,
  `Create a professional Open House instagram post for 4 Woodhouse Road, Barnham, VT. Use dark blue and white for color scheme`,
  `special Valentine's Day promotion for couples at my hair salon instagram post with watercolour background`,
  `can we create an instagram post for acceptance of master’s programs`,
  `Create an image for an instagram post about the 4th of july. make it calssic and professional`,
  `can we create an instagram post for national ice cream day`,
  `Children's storytime library whimsical Instagram post`,
  `Local theater production Sydney Instagram post`,
  `Anniversary sale featuring products instagram post`,
  `help me design an Instagram post for handmade wooden toys as perfect hanukkah gifts`,
  `Help me design an Instagram post for my University's football rivalry. It's between Lehigh University and Lafayette College and is called "The Rivalry."`,
  `Create an Instagram post template that will accommodate a collage of 5 photos`,
  `Bright and lively instagram post free cofee at laundromat show happy customers`,
  `Create a real estate post about how sellers would want to list their house with The Vermont Sales Group Stratton Mountain VT`,
  `Create an instagram post State Compliance: "In what ways should federal agencies be required to respect state laws and businesses that comply with them"`,
  `business company profile canvas template instagram post three-row layout`,
  `Please create a instagram post with plenty of question marks pattern`,
  `create an instagram post explaining the importance of using social media for a restaurant.`,
  `fathers day for restaurant template instagram post`,
  `create an instagram post recruiting fosters for a small dog rescue`,
];

const recipieNames = [
  "SquareMinimalFrame",
  "SquareWithBgImage",
  "BottomBorderGradient",
  "Glassmorphic",
  "Watercolor",
  "CenterHero",
  "Polaroid",
  "ContentImage1",
  "Thoughts",
  "StructuredLines",
  "Fuzz",
];

const allPairs = [
  ...losses.map((pair) => ({ ...pair, result: "Loss" })),
  ...wins.map((pair) => ({ ...pair, result: "Win" })),
];

let currentIndex = 0;
let filteredPairs = allPairs;

const usImage = document.getElementById("usImage");
const opponentImage = document.getElementById("opponentImage");
const resultElement = document.getElementById("result");
const modelElement = document.getElementById("model");
const promptElement = document.getElementById("prompt");
const recipieElement = document.getElementById("recipie");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const jumpInput = document.getElementById("jumpInput");
const jumpButton = document.getElementById("jumpButton");
const resultCountElement = document.getElementById("resultCount");
const filterRadios = document.getElementsByName("filter");

function updateResultCount() {
  resultCountElement.textContent = `Viewing result ${currentIndex + 1}/${
    filteredPairs.length
  }`;
}

function showPair(index) {
  const normalizedIndex = (index + filteredPairs.length) % filteredPairs.length;
  const pair = filteredPairs[normalizedIndex];
  usImage.src = `images/${stripNumberFromFilename(pair.us)}`;
  opponentImage.src = `images/${stripNumberFromFilename(pair.opponent)}`;
  resultElement.textContent = `Result: ${pair.result}`;
  modelElement.textContent = `${pair.model}`;

  const promptIndex = parseInt(
    pair.us.slice(pair.us.indexOf("prompt_") + 7, pair.us.indexOf("-layout"))
  );
  promptElement.textContent = `${goldenPrompts200[promptIndex]}`;

  const recipieIndex = parseInt(
    pair.us.slice(pair.us.indexOf("layout_") + 7, pair.us.indexOf("."))
  );
  recipieElement.textContent = `${recipieNames[recipieIndex]}`;

  currentIndex = normalizedIndex;
  jumpInput.value = currentIndex + 1;
  updateResultCount();
}

function filterPairs() {
  const filterValue = document.querySelector(
    'input[name="filter"]:checked'
  ).value;
  if (filterValue === "all") {
    filteredPairs = allPairs;
  } else {
    filteredPairs = allPairs.filter(
      (pair) => pair.result.toLowerCase() === filterValue
    );
  }
  currentIndex = 0;
  showPair(currentIndex);
}

nextButton.addEventListener("click", () => {
  showPair(currentIndex + 1);
});

prevButton.addEventListener("click", () => {
  showPair(currentIndex - 1);
});

jumpButton.addEventListener("click", () => {
  const jumpTo = parseInt(jumpInput.value) - 1;
  showPair(jumpTo);
});

jumpInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const jumpTo = parseInt(this.value) - 1;
    showPair(jumpTo);
  }
});

filterRadios.forEach((radio) => {
  radio.addEventListener("change", filterPairs);
});

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowLeft":
      showPair(currentIndex - 1);
      break;
    case "ArrowRight":
      showPair(currentIndex + 1);
      break;
  }
});

// Show the first pair when the page loads
filterPairs();

function stripNumberFromFilename(filename) {
  return filename.slice(filename.indexOf("_") + 1);
}
