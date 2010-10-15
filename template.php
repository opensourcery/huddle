<?php
// $Id$

/**
 * Implementation of hook_theme().
 */
function huddle_theme(&$existing, $type, $theme, $path) {
  $hooks = doune_theme($existing, $type, $theme, $path);
  return $hooks;
}
