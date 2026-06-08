const Customer = require("../models/Customer");

/**
 * GET /
 * Homepage (Dashboard)
 */
exports.homepage = async (req, res) => {
  const messages = await req.flash("info");

  const locals = {
    title: "NodeJs",
    description: "Free NodeJs User Management System",
  };

  let perPage = 12;
  let page = req.query.page || 1;

  try {
    const customers = await Customer.find({})
      .sort({ createdAt: -1 })
      .skip(perPage * page - perPage)
      .limit(perPage);

    const count = await Customer.countDocuments({});

    res.render("index", {
      locals,
      customers,
      current: page,
      pages: Math.ceil(count / perPage),
      messages,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * GET /about
 */
exports.about = async (req, res) => {
  const locals = {
    title: "About",
    description: "Free NodeJs User Management System",
  };

  res.render("about", locals);
};

/**
 * GET /add
 */
exports.addCustomer = async (req, res) => {
  const locals = {
    title: "Add New Customer",
    description: "Free NodeJs User Management System",
  };

  res.render("customer/add", locals);
};

/**
 * POST /add customer
 */
exports.postCustomer = async (req, res) => {
  try {
    console.log("NEW CUSTOMER:", req.body);

    await Customer.create(req.body);

    await req.flash("info", "New customer has been added.");

    res.redirect("/");
  } catch (error) {
    console.log("CREATE ERROR:", error);
  }
};

/**
 * GET /view/:id
 */
exports.view = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    const locals = {
      title: "View Customer",
      description: "Free NodeJs User Management System",
    };

    res.render("customer/view", {
      locals,
      customer,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * GET /edit/:id
 */
exports.edit = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    const locals = {
      title: "Edit Customer",
      description: "Free NodeJs User Management System",
    };

    res.render("customer/edit", {
      locals,
      customer,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * POST /edit/:id
 */
exports.editPost = async (req, res) => {
  try {
    await Customer.findByIdAndUpdate(req.params.id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      tel: req.body.tel,
      email: req.body.email,
      details: req.body.details,
      updatedAt: Date.now(),
    });

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

/**
 * DELETE /delete/:id
 */
exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

/**
 * POST /search
 */
exports.searchCustomers = async (req, res) => {
  const locals = {
    title: "Search Customers",
    description: "Free NodeJs User Management System",
  };

  try {
    let searchTerm = req.body.searchTerm || "";
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const customers = await Customer.find({
      $or: [
        { firstName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { lastName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });

    res.render("search", {
      customers,
      locals,
    });
  } catch (error) {
    console.log(error);
  }
};