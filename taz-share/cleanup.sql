-- Fill in player names
update result_full set player = 'Justin' where name = 'Justin' or name = 'Taako';
update result_full set player = 'Travis' where name = 'Travis' or name = 'Magnus';
update result_full set player = 'Clint' where name = 'Clint' or name = 'Merle';
update result_full set player = 'Griffin' where player is null;

-- Fill in whether the line is in or out of character
update result_full set isCharacter = 0 where name = 'Clint' or name = 'Travis' or name = 'Justin' or name = 'Griffin';
update result_full set isCharacter = 1 where isCharacter is null;

-- Pull episode number from episode filename
update result_full set episodeNumber = substr(episode, 11, length(episode) + 1 - 15);