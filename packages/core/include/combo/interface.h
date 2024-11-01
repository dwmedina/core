#ifndef COMBO_INTERFACE_H
#define COMBO_INTERFACE_H

typedef struct PlayState PlayState;

void Interface_Update(PlayState* play);

#if defined(GAME_MM)
void Interface_NewDay(PlayState* play, int day);
void Interface_SetHudVisibility(u16 hudVisibility);
void Interface_SkipMoonCrash(PlayState* play);
#endif

#endif
