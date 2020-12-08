# Points

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/hehongyuanlove/flarum-points.svg)](https://packagist.org/packages/hehongyuanlove/flarum-points)

A [Flarum](http://flarum.org) extension.  points copy

### Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually with composer:

```sh
composer require hehongyuanlove/xxxxxx
```

### Updating

```sh
composer update hehongyuanlove/xxxxxxx
```

### Links

- [Packagist](https://packagist.org/packages/hehongyuanlove/flarum-points)

### 安装说明

- 删除 `migrations` 表中的 `2020_06_17_102253_add_points_to_users` `2020_06_17_081739_points_logs_table` 记录

  ```sh
    CREATE TABLE `gam_points_logs` (
    	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    	`owner_id` INT(10) UNSIGNED NOT NULL,
    	`discussion_id` INT(10) UNSIGNED NULL DEFAULT NULL,
    	`post_id` INT(10) UNSIGNED NULL DEFAULT NULL,
    	`type` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_unicode_ci',
    	`amount` INT(11) NOT NULL,
    	`current` INT(11) NOT NULL,
    	`extra` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
    	`created_at` TIMESTAMP NOT NULL,
    	PRIMARY KEY (`id`)
    )
    COLLATE='utf8_unicode_ci'
    ENGINE=InnoDB;
  
    ALTER TABLE `users`
    ADD COLUMN `points_count`  INT(11)  DEFAULT 0 AFTER `suspended_until`;
    ALTER TABLE `users`
    ADD COLUMN `points_rank`  INT(11)  DEFAULT 0 AFTER `points_count`;
    ALTER TABLE `users`
    ADD COLUMN `points_probability`  char(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '{}' AFTER `points_count`;
    ALTER TABLE `users`
    ADD COLUMN `points_total`  INT(11)  DEFAULT 0 AFTER `points_probability`;
    
    INSERT INTO `migrations` (`migration`, `extension`) VALUES ('2020_06_17_081739_points_logs_table', 'niclalalla-points');
    INSERT INTO `migrations` (`migration`, `extension`) VALUES ('2020_06_17_102253_add_points_to_users', 'niclalalla-points');

  ```
- 删除原先的 `gam_points_logs` 表
- 删除 `user` 表当中得 `points_probability` `points_count` 字段
