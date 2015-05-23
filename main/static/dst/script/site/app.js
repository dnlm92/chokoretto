// Generated by CoffeeScript 1.9.2
(function() {
  $(function() {
    return init_common();
  });

  $(function() {
    return $('html.welcome').each(function() {
      return LOG('init welcome');
    });
  });

  $(function() {
    return $('html.auth').each(function() {
      return init_auth();
    });
  });

  $(function() {
    return $('html.feedback').each(function() {});
  });

  $(function() {
    return $('html.user-list').each(function() {
      return init_user_list();
    });
  });

  $(function() {
    return $('html.user-merge').each(function() {
      return init_user_merge();
    });
  });

  $(function() {
    return $('html.admin-config').each(function() {
      return init_admin_config();
    });
  });

}).call(this);